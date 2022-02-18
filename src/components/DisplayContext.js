import { createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [startNumber, setStartNumber] = useState(0);
  const [endNumber, setEndNumber] = useState(6);

  return (
    <DisplayContext.Provider
      value={{
        startNumber,
        setStartNumber,
        endNumber,
        setEndNumber,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
