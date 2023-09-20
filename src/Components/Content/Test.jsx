import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tab, Tabs } from '@mui/material';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}








function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const location = useLocation()
  const content_topic = location.state
  // console.log(content_topic)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMobileOpen(!mobileOpen);
  };


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          style={{ backgroundColor: "white" }}
        >
          {content_topic &&
            content_topic.map((item, index) => {
              // console.log(item)
              return <Tab label={item.question} {...a11yProps(item.id)} style={{ textAlign: "left", textTransform: "capitalize" }} />
            })
          }
        </Tabs>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{ height: "65px" }}
        // position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}

          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='topics_main_container'>
          <div className='topic_container'>
            {content_topic &&
              content_topic.map((item) => {
                // console.log(item)
                return <div>
                  <TabPanel value={value} index={item.id - 1}>
                    <h3 style={{ letterSpacing: "1px", margin: "20px 0" }}>{item.question}</h3>
                    {/* <p className='content_answer'>{parse(item.answer)}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    {item.code_snippet && item.code_snippet.map((data) => {
                      // console.log(data)
                      return <>
                        <div className='code_snippet_container' key={data.id}>
                          <p className='code_snippet_answer'><b>{data.answer}</b></p>
                          <div className='code_snippet_sub_container'>
                            <div className='input_box'>
                              <p className='input_heading'>Input</p>
                              <img className='code_image' src={data.input_image} alt="" />
                            </div>
                            {
                              data.output_image && <>
                                <div>
                                  <p className='input_heading'>Output</p>
                                  <img className='code_image' src={data.output_image} alt="" />
                                </div>
                              </>
                            }
                          </div>
                        </div>
                      </>
                    })}

                  </TabPanel>
                </div>
              })
            }
          </div>
          <div className='button_container'>
            <Button variant="contained" color="success" size="medium" onClick={() => setValue(value !== 0 ? value - 1 : 0)}>
              {/* <ArrowBackRoundedIcon /> */}
              Previous
            </Button>
            <Button variant="contained" color="success" size="medium" onClick={() => setValue(value !== content_topic.length - 1 ? value + 1 : 0)}>
              Next
              {/* <ArrowForwardRoundedIcon /> */}
            </Button>
          </div>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
