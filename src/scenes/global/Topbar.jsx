import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { purple } from "@mui/material/colors";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2} width="359%">
      {/* Search bar */}
      <Box
        display="flex"
        sx={{
          background: "linear-gradient(135deg, #42006c, #42006c)", // Apply the gradient background
          borderRadius: "3px",
          width: '300px',  // Adjust width if necessary
        }}
      >
        <InputBase 
          sx={{ ml: 2, flex: 1, color: 'white' }} 
          placeholder="Search" 
        />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;




