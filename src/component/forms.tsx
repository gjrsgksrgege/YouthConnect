import { useState } from "react";
import Message from "./message";

const Forms = () => {
  const [showPopup, setShowPopup] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const Formdata = new FormData(e.currentTarget);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfVJojyfxv4ZZvZQhCN1WYD7_md8piqQIdepJZ_7_3V-wHR8Q/formResponse",
        { method: "POST", body: Formdata, mode: "no-cors" }
      );

      setShowPopup(true);
      console.log("Form submitted successfully");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <div>
        <form
          onSubmit={submitForm}
          className="w-[23rem] bg-gray-100 p-8 rounded-xl"
        >
          <div className="flex flex-col gap-4 mb-12">
            <input
              type="text"
              name="entry.39651778"
              placeholder="State your name"
              className="border p-2 w-full bg-gray-300 border-none rounded-md placeholder:text-black"
            />
            <input
              type="email"
              name="entry.123514061"
              placeholder="Enter your email"
              className="border p-2 lg:w-full bg-gray-300 border-none rounded-md placeholder:text-black"
            />
            <textarea
              name="entry.468243822"
              rows={4}
              minLength={10}
              maxLength={1000}
              placeholder="What's your Thought?"
              className="border p-2 w-full min-h-[200px] bg-gray-300 border-none rounded-md placeholder:text-black resize-none"
            />
          </div>
          <button
            type="submit"
            value="Submit"
            className="bg-blue-500 w-full text-white p-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {showPopup && <Message message="Thank you for sharing your thoughts!" />}
    </div>
  );
};

export default Forms;
