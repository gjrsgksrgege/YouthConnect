import { useEffect, useState } from "react";

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <>
      <div
        className={`fixed -top-0 right-0 flex flex-col items-start justify-center bg-white rounded-lg border-2 border-gray-300 gap-2 px-6 py-3 z-40 transform transition-all duration-500 ease-in-out ${
          show ? "translate-y-8" : "-translate-y-full"
        }`}
      >
        <div>Success Message</div>
        <div>{message}</div>
      </div>
    </>
  );
};

export default Message;
