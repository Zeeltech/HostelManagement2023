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



import AddFoodPopUp from "./pages/Rector/Food/AddFoodPopUp";
import AllFoods from "./pages/Rector/Food/AllFoods";
import EditFoodPopUp from "./pages/Rector/Food/EditFoodPopUp";

import StudentProfile from "./pages/Student/StudentProfile";
import RectorProfile from "./pages/Rector/RectorProfile";
import AccountantProfile from "./pages/Accountant/AccountantProfile";
import AllNotices from "./pages/Rector/Notice/AllNotices";




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

          <Route path="/rector/dashboard" element={<RectorDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/accountant/dashboard" element={<AccountantDashboard />} />

          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/rector/profile" element={<RectorProfile />} />
          <Route path="/accountant/profile" element={<AccountantProfile />} />

          <Route path="/rector/addfood" element={<AddFoodPopUp />} />
          <Route path="/rector/allfoods" element={<AllFoods />} />
          <Route path="/rector/allfoods/:id" element={<EditFoodPopUp />} />

          <Route path="/rector/allnotices" element={<AllNotices/>}/>

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
