import { useState } from "react";
import axios from "axios";
import config from "../config"; // Adjust the path as necessary

type Props = {
  setMessages: any;
};

function Title({ setMessages }: Props) {
  const [isResetting, setIsResetting] = useState(false);

  // Reset conversation
  const resetConversation = async () => {
    setIsResetting(true);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    await axios
      .get(`${BASE_URL}/reset`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setMessages([]);
        }
      })
      .catch((err) => {});

    setIsResetting(false);
  };

  return (
   <div>
    <div className="flex justify-between items-center w-full p-4 bg-gray-900 text-white font-bold shadow">
      <div className="italic text-lg">Jocular {config.BOT_NAME}, a Latin teacher with a humerus bone 
      </div>
      <button
        onClick={resetConversation}
        className={
          "transition-all duration-300 text-blue-300 hover:text-pink-500 " +
          (isResetting && "animate-pulse")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
      <div className="bg-gray-500 p-4 text-white text-sm">
        <strong>Instructions</strong>:
        <ul className="list-disc list-inside">
          {/* Add your instructions here as list items */}
          <li>Ask questions to help you learn Latin, such as "How do you say hello in Latin?" and "How do you count to 10?" </li>
          <li>Press the mic icon to start recording, and release to stop recording.</li>
          <li>Limitations: May take up to 10 secs to respond. Only works on desktop (Mac or PC).</li>
          {/* Add more instructions as needed */}
        </ul>
      </div>
  </div>      
  );
}

export default Title;
