import * as Icons from "@mui/icons-material";

const services = [
  {
    name: "Worldwide shipping",
    description: "From our store to your doorstep, no matter where you are",
    icon: (
      <Icons.AirplanemodeActive
        style={{ width: "50px", height: "50px", color: "#454545" }}
      />
    ),
  },
  {
    name: "30 days guarantee",
    description: "Your satisfaction is our priority: love it or return it",
    icon: (
      <Icons.CalendarMonth
        style={{ width: "50px", height: "50px", color: "#454545" }}
      />
    ),
  },
  {
    name: "Secured payments",
    description: "Shop securely, pay with peace of mind",
    icon: (
      <Icons.Security
        style={{ width: "50px", height: "50px", color: "#454545" }}
      />
    ),
  },
];

export default services;
