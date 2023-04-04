import * as Icons from "@mui/icons-material";

import { darkGreyColor } from "../colorPalette";

const CustomIcon = ({ name }) => {
  const IconComponent = Icons[name];
  return (
    <IconComponent
      style={{ width: "50px", height: "50px", color: `${darkGreyColor}` }}
    />
  );
};

const services = [
  {
    name: "Worldwide shipping",
    description: "From our store to your doorstep, no matter where you are",
    icon: <CustomIcon name="AirplanemodeActive" />,
  },
  {
    name: "30 days guarantee",
    description: "Your satisfaction is our priority: love it or return it",
    icon: <CustomIcon name="CalendarMonth" />,
  },
  {
    name: "Secured payments",
    description: "Shop securely, pay with peace of mind",
    icon: <CustomIcon name="Security" />,
  },
];

export default services;
