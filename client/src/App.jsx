import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import * as myContants from "../myConstants";
import IndexPage from "./pages/IndexPage";
import { UserContext, UserContextProvider } from "../UserContext";

import LoginPage from "./pages/LoginPage";
import RectorLogin from "./pages/Rector/RectorLogin";
import AccountantLogin from "./pages/Accountant/AccountantLogin";
import StudentSignup from "./pages/Student/StudentSignup";
import StudentLogin from "./pages/Student/StudentLogin";

axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/rector/login" element={<RectorLogin />} />

          <Route path="/accountant/login" element={<AccountantLogin />} />

          <Route path="/student/register" element={<StudentSignup />} />
          <Route path="/student/login" element={<StudentLogin />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
