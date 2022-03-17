import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pusher from "pusher-js";
import * as dayjs from "dayjs";
import Layout from "@/components/Layout";
import {
  Flex,
  Box,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import styles from "@/styles/MyChat.module.css";
import { BsThreeDots } from "react-icons/bs";
import { MdAttachFile, MdEmojiPeople } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { parseCookies } from "@/helpers/index";
import { NEXT_PUSHER_KEY, API_URL } from "@/lib/index";
import ChatList from "@/components/ChatList";

function mychat({ user, riders, token }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pusher = new Pusher(NEXT_PUSHER_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("App\\Events\\MessageSent", (data) => {
      setMessages(data.chat.reverse());
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

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

  const selectContact = (contact) => {
    if (selectedContact === contact) {
      return;
    }
    setSelectedContact(contact);

    setFetchingMessages(true);
    fetchMessages(contact).then((data) => {
      setMessages(data.data.chat);
      setFetchingMessages(false);
    });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("message", message);
    formdata.append("receiver_id", selectedContact.long_id);

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

    // setMessages(data.data.chat);

    setMessage("");
  };

  return (
    <Layout title="Message" data={user}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <div className={styles.searchContainer}>
            <InputGroup rounded="full">
              <InputRightElement
                pointerEvents="none"
                children={<BiSearch color="gray.300" />}
              />
              <Input
                bgColor="white"
                rounded="full"
                type="text"
                placeholder="Search Contact"
              />
            </InputGroup>
          </div>
          <div className={styles.header}>
            <p>My Chat</p>
            <BsThreeDots />
          </div>
          <ul className={styles.contactList}>
            {riders?.length < 1 && (
              <div className={styles.emptyWrapper}>
                <p className={styles.emptyText}>No Contacts</p>
              </div>
            )}
            {riders?.length > 0 &&
              riders?.map((rider) => (
                <li
                  key={rider.id}
                  onClick={() => selectContact(rider)}
                  className={`${styles.contact} ${
                    selectedContact?.id === rider.id && styles.contactSelected
                  }`}
                >
                  <div className={styles.profileImageWrapper}>
                    <Avatar size="md" name={rider.name} src={rider.passport}>
                      {/* <AvatarBadge size="md" bg="green.500" /> */}
                    </Avatar>
                  </div>
                  <div className={styles.contactText}>
                    <p className={styles.contactName}>{rider.name}</p>
                    {/* <p className={styles.lastMessage}>
                      This is the last message message mesudidni dsilhnold
                    </p> */}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.chatMessage}>
          {fetchingMessages && (
            <div className={styles.emptyWrapper}>
              <p className={styles.emptyText}>Fetching Messages ...</p>
            </div>
          )}
          {selectedContact && !fetchingMessages && (
            <>
              <div className={styles.chatHeader}>
                <BsThreeDots className={styles.dotsIcon} />
                <p className={styles.chatName}>{selectedContact.name}</p>
              </div>
              {/* chat messages */}
              <ChatList
                messages={messages}
                rider={selectedContact}
                user={user}
              />
              {/* input field */}
              <form
                className={styles.chatInput}
                onSubmit={(e) => handleSendMessage(e)}
              >
                <Avatar size="md" name={user.name} src={user.passport}>
                  {/* <AvatarBadge size="md" bg="green.500" /> */}
                </Avatar>
                <input
                  className={styles.input}
                  placeholder="Type a message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <MdAttachFile className={styles.icon} />
                <MdEmojiPeople className={styles.icon} />
                <RiSendPlaneFill
                  className={styles.sendIcon}
                  onClick={(e) => handleSendMessage(e)}
                />
              </form>
            </>
          )}
          {!selectedContact && !fetchingMessages && (
            <div className={styles.emptyWrapper}>
              <p className={styles.emptyText}>Select a Contact</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default mychat;

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
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userData = await resUser.json();

  const { user } = userData.data;

  return {
    props: {
      riders,
      token,
      user,
    },
  };
}
