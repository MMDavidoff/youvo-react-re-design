import React from "react";
import Container from "../components/container/Container";
import Row from "../components/row/Row";
import SideBar from "../components/sideBar/SideBar";
import UserShow from "../components/userShow/UserShow";
import classes from "./ChatPage.module.css";
import TextEnter from "../components/textEnter/TextEnter";
import HeaderChat from "../components/headerChat/HeaderChat";
import ChatBubble from "../components/chatBubble/ChatBubble";
import ChatWindow from "../components/chatWindow/ChatWindow";
import ImageSend from "../components/imageSend/ImageSend";
import FooterChat from "../components/footerChat/FooterChat";

const ChatPage = () => {
  return (
    <main className={classes.chatSection}>
      <Container>
        <Row>
          <div className={classes.sideBarArea}>
          <SideBar />
          <UserShow />
          </div>
          <div className={classes.chatArea}>
          <HeaderChat />
          <ChatWindow />
          <FooterChat />
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default ChatPage;
