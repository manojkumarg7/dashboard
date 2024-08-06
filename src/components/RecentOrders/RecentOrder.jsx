import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const recentOrdersData = [
  {
    id: 1,
    customer: "Wade Warner",
    avatar: "",
    orderNo: "923487",
    amount: "897",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    avatar: "67.90",
    orderNo: "673826",
    amount: "8647",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    orderNo: "239856",
    avatar: "",
    amount: "673.80",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kritan",
    orderNo: "243677",
    amount: "234.6",
    avatar: "",
    status: "Cancelled",
  },
  {
    id: 5,
    customer: "Code fisher",
    orderNo: "673244",
    amount: "627",
    avatar: "",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Cody Fisher",
    orderNo: "628317",
    amount: "100",
    avatar: "",
    status: "Delivered",
  },
];

const rows = [
  createData("Frozen yoghurt", 546456, 642, "Delivered"),
  createData("Wade Warner", 237628, 97.0, "Delivered"),
  createData("David Warner", 237628, 97.0, "Cancelled"),
  createData("Wade Warner", 237628, 97.0, "Cancelled"),
];

function RecentOrder() {
  return (
    <div>
      <React.Fragment>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "white",
            backgroundColor: "#1f2029",
            padding: "20px",
            mb: 0,
          }}
        >
          Recent Orders
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "#1f2029" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ color: "white" }}>
                <TableCell sx={{ color: "white" }}>Customer</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Order No
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Amount
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentOrdersData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                    }}
                  >
                    <Avatar alt="Cindy Baker" src="" />
                    {row.customer}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {row.orderNo}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    {row.amount}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color:
                        row.status === "Delivered"
                          ? "green"
                          : row.status === "Cancelled"
                          ? "red"
                          : "white",
                    }}
                  >
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    </div>
  );
}

export default RecentOrder;
