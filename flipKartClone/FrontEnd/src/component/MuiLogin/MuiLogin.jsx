import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// styled css
const LoginBox = styled(Box)`
  width: 42vw;
  height: 90vh;
`;
const Sidebar = styled(Box)`
  background: #2874f0;
  color: white;
  width: 40%;
`;
const LoginFields = styled(Box)`
width: 70%;
  padding: 30px;
  color: #586E7A  ;
  display: 'flex';
  direction: 'column'
  align-items: 'center';
  justify-content: 'center';
  & > div, & button, & p {
    margin-top: 9px;
  }
`;

const initialOpenValue = true;
const initialInputData = {
  username: "",
  email: "",
  password: "",
  mobile: "",
};

/// calling main function
const MuiLogin = ({ open, setOpen }) => {
  const [isLogin, setIsLogin] = useState(initialOpenValue);
  const [inputData, setInputData] = useState(initialInputData);

  const handleLoginBox = () => {
    setIsLogin(false);
  };

  const handleChange = (event) => {
    setInputData(
       { ...inputData, [event.target.name]: event.target.value });
       
    
  };
  const submitHandler= (e)=>{
    e.preventDefault();
    console.log(inputData)
    setInputData(initialInputData)
  }
  // console.log(inputData);
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        setIsLogin(initialOpenValue);
      }}
    >
      <LoginBox sx={{ display: "flex", textAlign: "center" }}>
        <Sidebar>
          <Box sx={{ marginTop: 5, paddingRight: 2 }}>
            <Typography variant="h4">
              {isLogin ? "Login" : "Register"}
            </Typography>
            <Typography>
              {isLogin
                ? "Get access to your Orders, Wishlist and Recommendations"
                : "Register and submerge into the amazing world of flipKart"}
            </Typography>
            <img
              src="../src/assets/img/online-shopping.avif"
              style={{ width: 150, marginTop: 270 }}
            ></img>
          </Box>
        </Sidebar>
        {isLogin ? (
          <LoginFields>
            <Typography variant="h4"> Login </Typography>
            <form action="#" onSubmit={submitHandler}>
              <TextField
                variant={"standard"}
                type="text"
                label={"email"}
                fullWidth
                name="email"
                value={inputData.email}
                onChange={handleChange}
              />
              <TextField
                variant={"standard"}
                type="password"
                name="password"
                value={inputData.password}
                label={"password"}
                fullWidth
                onChange={handleChange}
              />
              <Typography>
                login means you accept all the term and conditions relatated to
                the login facility
              </Typography>
              <Typography>OR</Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#ffffff",
                  color: "#000000",
                  marginBottom: 8,
                }}
              >
                {" "}
                Request OTP
              </Button>
              <br />
              <Button type="sumbit" variant="contained" color="warning">
                Login here
              </Button>
              <br />
              <Button onClick={handleLoginBox}>
                Not a member ? Register First{" "}
              </Button>
            </form>
          </LoginFields>
        ) : (
          <LoginFields>
            <Typography variant="h4"> Register</Typography>
            <form onSubmit={submitHandler}>
              <TextField
                variant={"standard"}
                type="text"
                label={"username"}
                fullWidth
                name={"username"}
                value={inputData.username}
                onChange={handleChange}
              />
              <TextField
                variant={"standard"}
                type="text"
                label={"email"}
                fullWidth
                name={"email"}
                value={inputData.email}
                onChange={handleChange}
              />
              <TextField
                variant={"standard"}
                type="number"
                label={"mobile number"}
                fullWidth
                name={"mobile"}
                value={inputData.mobile}
                onChange={handleChange}
              />
              <TextField
                variant={"standard"}
                type="password"
                label={"password"}
                fullWidth
                name={"password"}
                value={inputData.password}
                onChange={handleChange}
              />

              <Button type="sumbit" variant="contained" color="warning">
                Login here
              </Button>
              <br />
              <Button onClick={() => setIsLogin(true)}>
                Return to login page
              </Button>
            </form>
          </LoginFields>
        )}
      </LoginBox>
    </Dialog>
  );
};
export default MuiLogin;
