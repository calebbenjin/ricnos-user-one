import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import styles from "@/styles/Notification.module.css";

function NotificationItem({ type, text, subtext }) {
  return (
    <div className={styles.container}>
      <div className={styles.notificationBody}>
        <div
          className={`${styles.tag} ${
            type === "message" && styles.messageTag
          } ${type === "order" && styles.orderTag} ${
            type === "ticket" && styles.ticketTag
          } ${type === "new user" && styles.newUserTag}`}
        >
          {type}
        </div>
        <h3>{text}</h3>
        <p className={styles.notificationSubtext}>{subtext}</p>
        <span className={styles.notificationLink}>View</span>
      </div>
      <div className={styles.notificationTime}>
        <AiFillClockCircle />
        <p>26th Jul at 9:30pm</p>
      </div>
    </div>
  );
}

export default NotificationItem;
