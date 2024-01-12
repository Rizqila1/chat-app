import React from "react";
import ChatLists from "../chatLists";

const MainPageMessagesSection = () => {
  return (
    <main className="py-8 px-3 flex flex-col gap-8 border-r-2 border-slate-100 flex-none">
      <section className="flex items-center justify-between">
        <h3 className="text-3xl font-bold mx-2 me-[200px]">Messages</h3>

        <button className="p-2 bg-textblue rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.61111 17.6111C9.61111 17.8469 9.70476 18.073 9.87146 18.2397C10.0382 18.4064 10.2643 18.5 10.5 18.5C10.7357 18.5 10.9618 18.4064 11.1285 18.2397C11.2952 18.073 11.3889 17.8469 11.3889 17.6111V11.3889H17.6111C17.8469 11.3889 18.073 11.2952 18.2397 11.1285C18.4064 10.9618 18.5 10.7357 18.5 10.5C18.5 10.2643 18.4064 10.0382 18.2397 9.87146C18.073 9.70476 17.8469 9.61111 17.6111 9.61111H11.3889V3.38889C11.3889 3.15314 11.2952 2.92705 11.1285 2.76035C10.9618 2.59365 10.7357 2.5 10.5 2.5C10.2643 2.5 10.0382 2.59365 9.87146 2.76035C9.70476 2.92705 9.61111 3.15314 9.61111 3.38889V9.61111H3.38889C3.15314 9.61111 2.92705 9.70476 2.76035 9.87146C2.59365 10.0382 2.5 10.2643 2.5 10.5C2.5 10.7357 2.59365 10.9618 2.76035 11.1285C2.92705 11.2952 3.15314 11.3889 3.38889 11.3889H9.61111V17.6111Z"
              fill="white"
            />
          </svg>
        </button>
      </section>

      <section className="flex p-3 bg-slate-100 items-center rounded-xl">
        <button className="me-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z"
              stroke="#8A8A8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search"
          className="me-4 text-lg bg-slate-100"
        />
      </section>

      <section className="flex flex-col gap-3 items-center w-full">
        <ChatLists />
      </section>
    </main>
  );
};

export default MainPageMessagesSection;
