import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import * as myContants from "../myConstants";
import IndexPage from "./pages/IndexPage";

import RegisterPage from "./pages/RegisterPage";
import RectorSignup from "./pages/Rector/RectorSignup";
import RectorLogin from "./pages/Rector/RectorLogin";
import AccountantSignup from "./pages/Accountant/AccountantSignup";
import AccountantLogin from "./pages/Accountant/AccountantLogin";
import StudentSignup from "./pages/Student/StudentSignup";
import StudentLogin from "./pages/Student/StudentLogin";

axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route path="/" element={<IndexPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/rector/register" element={<RectorSignup />} />
        <Route path="/rector/login" element={<RectorLogin />} />

        <Route path="/accountant/register" element={<AccountantSignup />} />
        <Route path="/accountant/login" element={<AccountantLogin />} />

        <Route path="/student/register" element={<StudentSignup />} />
        <Route path="/student/login" element={<StudentLogin />} />

      </Route>
    </Routes>
  );
}

export default App;
