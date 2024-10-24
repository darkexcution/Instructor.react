import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { blue, blueGrey } from "@mui/material/colors";

const SidebarComponent = () => {
  // State to handle collapse
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: "linear-gradient(135deg, #42006c, #42006c) !important", 
        },
        "& .ps-menuitem-root": {
          padding: "2px 30px 5px 5px !important",
        },
        "& .ps-menuitem-root:hover": {
          color: "#2A00B7 !important",
        },
        "& .ps-menuitem-root-active": {
          color: "#42006c !important",
        },
      }}
    >
      {/* Toggle Collapse Button */}
      <IconButton
        onClick={() => setIsCollapsed(!isCollapsed)}
        sx={{
          color: "purple",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          background: "linear-gradient(135deg, #42006c, #42006c)", // Apply the gradient background
          '&:hover': {
            background: "linear-gradient(135deg, #2A00B7, #42006c)", // Optional: change gradient on hover
          },
          borderRadius: "8px", // Optional: add border radius for better aesthetics
        }}
      >
        <MenuOutlinedIcon />
      </IconButton>

      {/* User Info */}
      {!isCollapsed && (
        <Box mb="0px">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              background: "linear-gradient(135deg, #42006c, #42006c)", // Apply the gradient
              padding: "20px", // Optional padding to give some space around the image
            }}
          >
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src="../../assets/default.jpg" // Adjust the image path as needed
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
        
          <Box
            textAlign="center"
            sx={{
              background: "linear-gradient(135deg, #42006c, #42006c)", // Apply the gradient background
              padding: "20px", // Optional padding to space the content
            }}
          >
            <Typography
              variant="h2"
              color={blueGrey[100]}
              fontWeight="bold"
              sx={{ fontSize: '1.5rem', m: "0 0 0 0" }}
            >
              Sith {/* You can replace this with dynamic user data */}
            </Typography>
            <Typography variant="h5" color={blue[500]}>
              Admin
            </Typography>
          </Box>
        </Box>
      )}

      {/* Sidebar Menu */}
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem icon={<HomeOutlinedIcon />}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Dashboard
            </Link>
          </MenuItem>
          <Typography variant="h2" color="#546e7a" sx={{ fontSize: '1rem', m: "5px 10px 0 30px" }}>Data</Typography>  
          <MenuItem icon={<PeopleOutlinedIcon />}>
            <Link to="/team" style={{ textDecoration: 'none', color: 'inherit' }}>
              Team Management
            </Link>
          </MenuItem>
          
          <Typography variant="h2" color="#546e7a" sx={{ fontSize: '1rem', m: "5px 10px 0 30px" }}>Pages</Typography>
          <MenuItem icon={<PersonOutlinedIcon />}>
            <Link to="/person" style={{ textDecoration: 'none', color: 'inherit' }}>
              Profile Form
            </Link>
          </MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>
            <Link to="/calendar" style={{ textDecoration: 'none', color: 'inherit' }}>
              Calendar
            </Link>
          </MenuItem>
          
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;



