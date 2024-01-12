import React, { useState } from "react";
import ChatGPTBlack from "../../src/assets/images/Mask group.png";

const MessageBubble = () => {
  const [showOriginal, setShowOriginal] = useState(false);

  const changeMessage = () => {
    setShowOriginal(!showOriginal);
  };

  const data = [
    {
      speaker: "Ato",
      full_name: "Atowara Sugireru",
      original_message: "日本語のメッセージ",
      translated_message: "Japanese message",
      time: "9.00 A.M",
    },
    {
      speaker: "107",
      full_name: "Shinju Sugireru",
      original_message: "English message",
      translated_message: "英語のメッセージ",
      time: "9.01 A.M",
    },
    {
      speaker: "Ato",
      full_name: "Atowara Sugireru",
      original_message: "日本語のメッセージ",
      translated_message: "Second Japanese message",
      time: "9.02 A.M",
    },
    {
      speaker: "107",
      full_name: "Shinju Sugireru",
      original_message: "Second English message",
      translated_message: "英語のメッセージ",
      time: "9.02 A.M",
    },
    {
      speaker: "107",
      full_name: "Shinju Sugireru",
      original_message: "Third English message",
      translated_message: "英語のメッセージ",
      time: "9.03 A.M",
    },
  ];

  return (
    <>
      {data.map((item, i) => (
        <div
          className={`
            ${item.speaker === "107" ? "right" : ""} chat-row px-3 z-0 py-2
          `}
          key={i}
        >
          <div className="chat-box flex">
            <div className="flex flex-col">
              <div className="chat-bubble">
                {item.speaker === "107" ? (
                  <p className="">{item.original_message}</p>
                ) : (
                  <p className="">
                    {showOriginal
                      ? item.original_message
                      : item.translated_message}
                  </p>
                )}

                {item.speaker === "107" && (
                  <>
                    <hr className="w-full border-slate-400 my-1" />
                    <p>{item.translated_message}</p>
                  </>
                )}
              </div>

              <div className="chat-time flex justify-between mt-1">
                <div className="gpt-help flex text-sm items-center">
                  <img
                    src={ChatGPTBlack}
                    alt="chat-gpt-logo-black"
                    className="w-5 h-5"
                  />

                  <button className="mx-2" onClick={() => changeMessage()}>
                    Show Original
                  </button>
                </div>

                <p className="text-sm">{item.time}</p>
              </div>
            </div>

            <div className="flex items-end">
              <div className="chat-photo">
                <div className="ms-1 me-3 float-end bg-palmblue rounded-full w-12 h-12 text-center justify-center items-center flex font-bold text-2xl text-textblue border-2 border-textblue">
                  {item.speaker === "107" ? "107" : "RT"}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageBubble;
