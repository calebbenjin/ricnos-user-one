import React from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import styles from "@/styles/Layout.module.css";
import NotificationItem from "./NotificationItem";

function NotificationModal({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        style={{ cursor: "pointer" }}
        className={styles.navIconBox}
      >
        <IoNotificationsSharp className={styles.navIcon} />
        <div>{data ? data.general_notification : null}</div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton />
          <hr />
          <ModalBody pb={6}>
            <NotificationItem
              type="message"
              text="Michael Scott sent a new message"
              subtext="The dundies are here again, and you have been nominated"
            />
            <NotificationItem
              type="order"
              text="Pamela besley placed an Order"
              subtext="Drawing materails for art show"
            />
            <NotificationItem
              type="ticket"
              text="Dwight Schrute made a complaint"
              subtext="Jim pulled another prank on me again, he needs to be fired"
            />
          </ModalBody>

          <ModalFooter>
            <div className={styles.footerLink}>
              <span>View more</span>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NotificationModal;
