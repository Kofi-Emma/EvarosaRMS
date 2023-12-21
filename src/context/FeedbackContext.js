import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(null);

  const getfeedback = (msg, type) => {
    if (type === "error") {
      setFeedback(
        <div className='bg-red-600 p-4'>{msg}</div>
      );
      return feedback;
    } else if (type === "success") {
      setFeedback(
        <div className='bg-green-600 p-4'>{msg}</div>
      );

      return feedback;
    } else return;
  };

  return (
    <FeedbackContext.Provider value={{ getfeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () =>
  useContext(FeedbackContext);
