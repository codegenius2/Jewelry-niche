import * as React from "react";
import "./Dashboard.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router";
import AddReview from "../AddReview/AddReview";
import useAuth from "../../Hooks/useAuth";
import Payment from "../Payment/Payment";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import MyOrders from "../MyOrders/MyOrders";
import AddProduct from "../AddProduct/AddProduct";

const drawerWidth = 240;

function Dashboard(props) {
  const { LogOut } = useAuth();
  const { window } = props;
  let { path, url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key={1}>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <Link to={`${url}/payment`}>
            <ListItemText primary='Pay Now' />
          </Link>
        </ListItem>
        <ListItem button key={1}>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <Link to={`${url}/addreview`}>
            <ListItemText primary='Add Review' />
          </Link>
        </ListItem>
        <ListItem button key={1}>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <Link to={`${url}/myorder`}>
            <ListItemText primary='My Order' />
          </Link>
        </ListItem>
        <ListItem button key={1}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <Link to={`${url}/makeAdmin`}>
            <ListItemText primary='Make Admin' />
          </Link>
        </ListItem>
        <ListItem button key={1}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <Link to={`${url}/addproduct`}>
            <ListItemText primary='Add New Product' />
          </Link>
        </ListItem>
        <ListItem button key={1}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <Link to='/' onClick={LogOut}>
            <ListItemText primary='LOGOUT' />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' noWrap component='div'>
              Dashboard
            </Typography>
            <Typography className='mx-auto' variant='h5' noWrap component='div'>
              <Link to='/'>
                <HomeIcon /> Home
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ px: 3 }}>
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <h3>Please select a produu.</h3>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <h3>Please select a produu45.</h3>
            </Route>
            <Route path={`${path}/addreview`}>
              <AddReview />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/addproduct`}>
              <AddProduct />
            </Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
