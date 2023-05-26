import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import * as myContants from "../myConstants";
import IndexPage from "./pages/IndexPage";

axios.defaults.baseURL = myContants.BACKEND_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
