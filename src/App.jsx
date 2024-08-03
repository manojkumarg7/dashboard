import Button from "@mui/material/Button";
import "./App.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Navbar from "./components/Header/Navbar";
import SideNavbar from "./components/Header/SideNavbar";
import OpenDrawer from "./components/Header/OpenDrawer";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./pages/Home/DashboardPage";
import NetProfit from "./components/NetProfit/NetProfit";
function App() {
  return (
    <>
      <DashboardPage />
      {/* <NetProfit /> */}
    </>
  );
}

export default App;
