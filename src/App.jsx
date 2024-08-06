import Button from "@mui/material/Button";
import "./App.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Navbar from "./components/Header/Navbar";
import SideNavbar from "./components/Header/SideNavbar";
import OpenDrawer from "./components/Header/OpenDrawer";
import { Dashboard } from "@mui/icons-material";
import DashboardPage from "./pages/Home/DashboardPage";
import NetProfit from "./components/NetProfit/NetProfit";
import RecentOrder from "./components/RecentOrders/RecentOrder";
import Feedback from "./components/Feedback/Feedback";
import Goals from "./components/Goals/Goals";
import BarChart from "./components/BarChart/BarChart";
function App() {
  return (
    <>
      {/* <DashboardPage /> */}
      {/* <NetProfit /> */}
      {/* <RecentOrder /> */}
      {/* <Feedback /> */}
      <BarChart />
      {/* <Goals /> */}
    </>
  );
}

export default App;
