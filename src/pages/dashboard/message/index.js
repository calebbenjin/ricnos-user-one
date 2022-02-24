import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Pusher from "pusher-js";
import * as dayjs from "dayjs";
import Layout from "@/components/Layout";
import { Flex, Box } from "@chakra-ui/react";
import styles from "@/styles/Chats.module.css";
import { BsThreeDots } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import { parseCookies } from "@/helpers/index";
import AuthContext from "@/context/AuthContext";
import { NEXT_PUSHER_KEY, API_URL } from "@/lib/index";
import PageLoader from "@/components/PageLoader";

export default function MessagePage({ riders, token, user }) {
  const [selectedChat, setSelectedChat] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState();

  const router = useRouter();

  // if (!user) {
  //   return <PageLoader />;
  // }

  const fetchMessages = async (rider) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const res = await fetch(
      `https://alpha.ricnoslogistics.com/api/chat/messages_user/${rider.id}`,
      requestOptions
    );
    const data = await res.json();

    return data;
  };

  const handleChatSelect = (user) => {
    setLoading(true);
    fetchMessages(user).then((data) => {
      setMessages(data.data.chat);
      setLoading(false);
    });
  };

  useEffect(() => {
    selectedChat && handleChatSelect(selectedChat);
  }, [selectedChat]);

  useEffect(() => {
    const pusher = new Pusher(NEXT_PUSHER_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("App\\Events\\MessageSent", (data) => {
      fetchMessages(selectedChat).then((data) => {
        setMessages(data.data.chat);
      });
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, [selectedChat, fetchMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("message", message);
    formdata.append("receiver_id", selectedChat.long_id);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const res = await fetch(
      "https://alpha.ricnoslogistics.com/api/chat/send",
      requestOptions
    );
    const data = await res.json();

    setMessages(data.data.chat);

    setMessage("");
  };

  return (
    <Layout title="Message" data={user}>
      <>
        <div className={styles.flexContainer}>
          <div className={styles.chatBoard}>
            <Box p="5" borderRadius="md">
              <div className={styles.chatFlexContainer}>
                <div className={styles.activeUsers}>
                  <input
                    type="text"
                    className={styles.search}
                    placeholder="Search"
                  />
                  <div className={styles.header}>
                    <p>My Chat</p>
                    <BsThreeDots />
                  </div>

                  <ul className={styles.userList}>
                    {riders ? (
                      riders.map((rider) => (
                        <li
                          key={rider.id}
                          onClick={() => setSelectedChat(rider)}
                        >
                          <Flex alignItems="center">
                            <h2>
                              {rider.passport && (
                                <Image
                                  src={rider.passport}
                                  alt={rider.name}
                                  width="100"
                                  height="100"
                                />
                              )}
                              <span className={styles.notification}></span>
                            </h2>
                            <h4 className={styles.userName}>{rider.name}</h4>
                          </Flex>
                          {/* <p>{user.time}</p> */}
                        </li>
                      ))
                    ) : (
                      <p>No Recent Chats</p>
                    )}
                  </ul>
                </div>

                <div className={styles.chatBody}>
                  {messages && (
                    <div className={styles.heading}>
                      <h2>{selectedChat.name}</h2>
                      <Flex justify="center" alignItems="center">
                        <p className={styles.not}></p>
                        <h4>Active Now</h4>
                      </Flex>
                    </div>
                  )}

                  <div className={styles.chats}>
                    <ul>
                      {messages ? (
                        messages?.map((message) => (
                          <>
                            {message.sender === "user" ? (
                              <li className={styles.replyChat} key={message.id}>
                                <div className={styles.reply}>
                                  <p>{message.message}</p>
                                  <small>
                                    {dayjs(message.created_at).format(
                                      "DD/MM/YYYY h:m"
                                    )}
                                  </small>
                                </div>
                                {user.passport && (
                                  <Image
                                    src={user.passport}
                                    alt="User"
                                    width="100"
                                    height="100"
                                    // placeholder="blur"
                                  />
                                )}
                              </li>
                            ) : (
                              <li
                                className={styles.chatContainer}
                                key={message.id}
                              >
                                {selectedChat.passport && (
                                  <Image
                                    src={selectedChat.passport}
                                    alt="User"
                                    width="100"
                                    height="100"
                                  />
                                )}
                                <div className={styles.agent}>
                                  <p>{message.message}</p>
                                  <small>
                                    {dayjs(message.created_at).format(
                                      "DD/MM/YYYY h:m"
                                    )}
                                  </small>
                                </div>
                              </li>
                            )}
                          </>
                        ))
                      ) : (
                        <p>No Messages available</p>
                      )}
                    </ul>

                    {messages && (
                      <form onSubmit={handleSendMessage}>
                        <div className={styles.messageInput}>
                          <div className={styles.input}>
                            {user.passport && (
                              <Image
                                src={user.passport}
                                alt="User"
                                width="100"
                                height="100"
                              />
                            )}

                            <textarea
                              onChange={(e) =>
                                setMessage(e.currentTarget.value)
                              }
                              value={message}
                              placeholder="Type a message here..."
                            ></textarea>
                          </div>
                          <MdAttachFile className={styles.file} />
                          <button>
                            <RiSendPlaneFill className={styles.button} />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await fetch(
    `https://alpha.ricnoslogistics.com/api/chat/my_chat_user`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const riderData = await res.json();
  const { riders } = riderData.data;

  const resUser = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const userData = await resUser.json()

  const { user } = userData.data

  return {
    props: {
      riders,
      token,
      user
    },
  };
}
