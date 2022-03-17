import { Avatar } from "@chakra-ui/react";
import * as dayjs from "dayjs";

import styles from "@/styles/MyChat.module.css";

function ChatList({ messages, rider, user }) {
  return (
    <ul className={styles.chatBody}>
      {messages.map((message) => (
        <li
          key={message.id}
          className={`${
            message.sender === "user" ? styles.userBubble : styles.riderBubble
          }`}
        >
          <Avatar
            mb="5"
            size="sm"
            name={message.sender === "user" ? user.name : rider.name}
            src={message.sender === "user" ? user.passport : rider.passport}
          />
          <div className={styles.bubbleBody}>
            <p className={styles.bubbleMessage}>{message.message}</p>
            <p className={styles.bubbleTime}>
              {dayjs(message.created_at).format("DD/MM/YYYY h:m")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChatList;
