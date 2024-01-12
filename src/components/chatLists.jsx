import React from "react";

const ChatLists = () => {
  const dataUser = [
    {
      speaker: "Ato",
      full_name: "Atowara Sugireru",
      last_message: "Thank You!",
      last_message_time: "8.15 A.M",
      is_new: false,
    },
    {
      speaker: "Ato",
      full_name: "Ritara",
      last_message: "Third English Message",
      last_message_time: "9.03 A.M",
      is_new: true,
    },
  ];

  return (
    <>
      {dataUser.map((item, i) => (
        <button
          className={`flex items-center justify-between w-full 
          ${item.is_new && `bg-palmblue`}
           p-3 rounded-lg`}
          key={i}
        >
          <div
            className={`me-3 bg-palmblue rounded-full w-[70px] h-14 text-center justify-center items-center flex font-bold text-2xl text-textblue border-2 border-textblue`}
          >
            {item.full_name.slice(0, 2).toUpperCase()}
          </div>

          <section className="flex justify-between w-full items-center">
            <div className="flex flex-col justify-between items-start">
              <h6 className="font-bold">
                {item.speaker === "Ato" && "ATO - "} {item.full_name}
              </h6>
              <h6 className="text-slate-500">{item.last_message}</h6>
            </div>

            <div className="flex flex-col justify-end items-end me-2">
              <p className="font-semibold text-sm">{item.last_message_time}</p>
              {item.is_new === false ? (
                <div className="bg-textblue rounded-full w-6 h-6 text-center flex items-center justify-center text-white">
                  1
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
            </div>
          </section>
        </button>
      ))}
    </>
  );
};

export default ChatLists;
