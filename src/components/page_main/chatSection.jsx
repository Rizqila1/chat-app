import React from "react";
import ChatGPTGreen from "../../assets/images/ChatGPT-green-logo.png";
import MessageBubble from "../MessageBubble";

const MainPageChatSection = () => {
  return (
    <main className="flex flex-col grow h-screen">
      <section className="flex shadow-lg w-full py-3 z-50">
        <button className="ms-4 me-5 bg-palmblue rounded-full w-12 h-12 text-center justify-center items-center flex font-bold text-2xl text-textblue border-2 border-textblue">
          RI
        </button>

        <div className="flex flex-col justify-between items-start">
          <h6 className="font-bold">ATO - Ritara</h6>
          <h6 className="text-slate-500">Online</h6>
        </div>
      </section>

      <section className=" w-full h-[90%] flex flex-col items-center z-0">
        <section className="w-full flex flex-col overflow-y-auto">
          <MessageBubble />
        </section>

        <div className="flex flex-col items-start justify-start gap-1 py-3 w-full px-3 bg-slate-100">
          <p className="text-wrap w-[60%] font-medium">
            貴社のシニアエンジニアが変更されたことに伴い、コードベースのメンテナンスについていくつか質問があります。
          </p>

          <div className="flex items-center gap-2 py-2">
            <img
              src={ChatGPTGreen}
              alt="chat-gpt-logo-green"
              className="w-6 h-6 rounded-full"
            />
            <p className="text-sm text-slate-400">Translate by ChatGPT-4</p>
          </div>

          <hr className="w-full border-slate-400 w-[calc(90% - 20px)]" />
        </div>

        <div className="flex flex-none w-full items-center pe-4 bg-slate-100 pb-4">
          <div className="flex items-center mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M16.6667 15V23.3333C16.6667 24.2174 17.0179 25.0652 17.643 25.6904C18.2681 26.3155 19.1159 26.6667 20 26.6667C20.8841 26.6667 21.7319 26.3155 22.357 25.6904C22.9821 25.0652 23.3333 24.2174 23.3333 23.3333V11.6667C23.3333 9.89856 22.631 8.20286 21.3807 6.95262C20.1305 5.70238 18.4348 5 16.6667 5C14.8986 5 13.2029 5.70238 11.9526 6.95262C10.7024 8.20286 10 9.89856 10 11.6667V25C10 27.6522 11.0536 30.1957 12.9289 32.0711C14.8043 33.9464 17.3478 35 20 35C22.6522 35 25.1957 33.9464 27.0711 32.0711C28.9464 30.1957 30 27.6522 30 25V8.33333"
                stroke="#2A7FFF"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="flex w-full items-center rounded-lg bg-white border-2 border-slate-300 justify-between">
            <input
              type="text"
              placeholder="Say something..."
              className="rounded-lg px-6 py-4"
            />

            <div className="mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="16" fill="#2A7FFF" />
                <path
                  d="M13.3935 18.6065L23 9M13.3935 18.6065L16.4501 24.7198C16.4884 24.8034 16.5499 24.8742 16.6273 24.9239C16.7047 24.9736 16.7948 25 16.8868 25C16.9787 25 17.0688 24.9736 17.1462 24.9239C17.2236 24.8742 17.2851 24.8034 17.3234 24.7198L23 9M13.3935 18.6065L7.28022 15.5499C7.19661 15.5116 7.12576 15.4501 7.07608 15.3727C7.02641 15.2953 7 15.2052 7 15.1132C7 15.0213 7.02641 14.9312 7.07608 14.8538C7.12576 14.7764 7.19661 14.7149 7.28022 14.6766L23 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPageChatSection;
