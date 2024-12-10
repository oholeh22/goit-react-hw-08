import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Tasks from "../Pages/Tasks/Tasks";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tasks' element={<Tasks />} />
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  );
};
export default App;