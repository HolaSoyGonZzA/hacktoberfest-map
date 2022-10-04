import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GoRepoForked } from "react-icons/go";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";

import GitHubIcon from "@mui/icons-material/GitHub";

import DrawerComp from "./Drawer";
// import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {/* <MonitorHeartIcon onClick={()=>{navigate('/')}} sx={{ transform: "scale(2)" }} /> */}
          <Typography sx={{ fontSize: "2rem" }}>Hacktoberfest-Map</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{}}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              ></Tabs>

              <Button
                sx={{
                  paddingTop: "0.4%",
                  marginLeft: "auto",
                  marginRight: "10px",
                }}
                variant="outlined"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://twitter.com/18reg_"
                >
                  <TwitterIcon />
                </a>
              </Button>
              <Button
                sx={{
                  paddingTop: "0.4%",

                  marginRight: "10px",
                }}
                variant="outlined"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.eliut.space/"
                >
                  <LanguageIcon />
                </a>
              </Button>
              <Button
                sx={{
                  paddingTop: "0.4%",

                  marginRight: "10px",
                }}
                variant="outlined"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/18reg/hacktoberfest-map"
                >
                  <GitHubIcon />
                </a>
              </Button>
              <Button sx={{ padding: "0.5%" }} variant="contained">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/18reg/hacktoberfest-map/fork"
                >
                  Fork <GoRepoForked />
                </a>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
