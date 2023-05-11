import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import styled from "@emotion/styled";

//using styled css
const Logout = styled(Typography)`
  color: #c70039;
  margin-left: 15px;
`;
const Component = styled(Menu)`
  margin-left: 25px;
  margin-top: 3px;
`;

// declearing states
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  // defining functions
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const userLogout= ()=>{
    setAccount('');
  }

  return (
    <>
      <Box>
        <h4 onClick={handleClick} className="barItem login">
          {" "}
          {account}
        </h4>
      </Box>

      <Component
        // anchorEl={anchorEl}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleClose(); userLogout()}}>
          <PowerSettingsNewOutlinedIcon color="error" /> <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};
export default Profile;
