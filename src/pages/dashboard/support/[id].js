import { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { Box, Heading } from "@chakra-ui/react";
import styles from "@/styles/Chats.module.css";
import Link from "next/link";
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import navs from "@/styles/Settings.module.css";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import PageLoader from "@/components/PageLoader";

export default function MessagePage({ support, token }) {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState();
  const [discussions, setDiscussions] = useState(support.discussions);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  if (!user) {
    return <PageLoader />;
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.api+json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      body: message,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://alpha.ricnoslogistics.com/api/support/discussion/${support.ticket_no}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setMessage("");
          toast.success(result.message);
          setDiscussions(result.data.support.discussions);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Layout data={user}>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.chatFlexContainer}>
        <Box className={navs.sideNav}>
          <nav className={navs.nav}>
            <Link href="/dashboard/support/">
              <a fontWeight="bold" className={navs.link}>
                Send Message
              </a>
            </Link>
            <Link href="/dashboard/support/openTicket">
              <a className={navs.link}>Open Ticket</a>
            </Link>
            <Link href="/dashboard/support/closeTicket">
              <a className={navs.link}>Close Ticket</a>
            </Link>
          </nav>
        </Box>

        <div className={styles.chatBody}>
          <div className={styles.heading}>
            <Heading fontSize="md" my="4">
              {support.subject}
            </Heading>
            {/* <Flex justify="center" alignItems="center">
              <p className={styles.not}></p>
              <h4>Active Now</h4>
            </Flex> */}
          </div>

          <div className={styles.chats}>
            <>
              {discussions?.length > 0 ? (
                <ul>
                  {discussions.map((discussion) => (
                    <div key={discussion?.id}>
                      {discussion?.from !== "0" ? (
                        <li className={styles.chatContainer}>
                          {/* <Image
                            src={discussion?.photo}
                            alt="User"
                            width="100"
                            height="100"
                          /> */}
                          <div className={styles.agent}>
                            <>
                              <p>{discussion?.message}</p>
                              <small>{discussion?.time}</small>
                            </>
                          </div>
                        </li>
                      ) : (
                        <li className={styles.replyChat}>
                          <div className={styles.reply}>
                            <>
                              <p>{discussion?.message}</p>
                              <small>{discussion?.time}</small>
                            </>
                          </div>
                          {/* <Image
                            src={discussion?.photo}
                            alt="User"
                            width="100"
                            height="100"
                          /> */}
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              ) : (
                <p
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No response for this discussion yet
                </p>
              )}

              <form onSubmit={(e) => handleSendMessage(e)}>
                <div className={styles.messageInput}>
                  <div className={styles.input}>
                    {/* <Image
                      src={user?.passport}
                      alt="UserImage"
                      width="100"
                      height="100"
                    /> */}

                    <textarea
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      value={message}
                      placeholder="Type a message here..."
                    ></textarea>
                  </div>
                  {/* <MdAttachFile className={styles.file} /> */}
                  <button>
                    <RiSendPlaneFill className={styles.button} />
                  </button>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { id } = query;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await fetch(
    `https://alpha.ricnoslogistics.com/api/support/show/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const supportData = await res.json();

  return {
    props: {
      support: supportData.data.support,
      token,
    },
  };
}
