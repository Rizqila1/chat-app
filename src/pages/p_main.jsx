import React from "react";
import Sidebar from "../components/sidebar";
import MainPageMessagesSection from "../components/page_main/messagesSection";
import MainPageChatSection from "../components/page_main/chatSection";

const MainPage = () => {
  return (
    <main className="flex font-sfProFont">
      <Sidebar />
      <MainPageMessagesSection />
      <MainPageChatSection />
    </main>
  );
};

export default MainPage;
