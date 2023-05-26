import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import * as myContants from "../myConstants";
import IndexPage from "./pages/IndexPage";
import { UserContext, UserContextProvider } from "../UserContext";

axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
