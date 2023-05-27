import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [rector, setRector] = useState(null);
  const [accountant, setAccountant] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (!rector) {
      axios.get("/rector/profile").then(({ data }) => {
        setRector(data);
      });
    }
    if (!accountant) {
      axios.get("/accountant/profile").then(({ data }) => {
        setAccountant(data);
      });
    }
    if (!student) {
      axios.get("/student/profile").then(({ data }) => {
        setStudent(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        rector,
        setRector,
        accountant,
        setAccountant,
        student,
        setStudent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
