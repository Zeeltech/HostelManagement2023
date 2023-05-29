import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import * as myContants from "../myConstants";
import IndexPage from "./pages/IndexPage";
import { UserContext, UserContextProvider } from "../UserContext";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import AccountantDashboard from "./pages/Accountant/AccountantDashboard";
import RectorDashboard from "./pages/Rector/RectorDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard";

import StudentProfile from "./pages/Student/StudentProfile";

import AddFood from "./pages/Rector/Food/AddFood";
import AllFoods from "./pages/Rector/Food/AllFoods";
import EditFood from "./pages/Rector/Food/EditFood";


axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route
            path="/accountant/dashboard"
            element={<AccountantDashboard />}
          />
          <Route path="/rector/dashboard" element={<RectorDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />

          <Route path="/student/profile" element={<StudentProfile />} />

          <Route path="/rector/addfood" element={<AddFood />} />
          <Route path="/rector/allfoods" element={<AllFoods />} />
          <Route path="/rector/allfoods/:id" element={<EditFood />} />

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
