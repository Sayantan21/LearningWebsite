import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';



import topic from '../../assets/topics_content/topic'
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser'
import '../../assets/css/topics.css'





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







export default function Topics() {
    const location = useLocation()
    const content_topic = location.state
    // console.log(content_topic)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
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
            <Divider />
        </Box>
    );


    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <div style={{ padding: "10px 15px" }}>
                    {
                        ['left'].map((anchor) => {
                            // console.log(anchor)
                            return <React.Fragment key={anchor}>
                                <Button variant='outlined' onClick={toggleDrawer(anchor, true)} style={{ fontWeight: "600" }}>Content</Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        })
                    }
                </div>

            </Box>

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
                        <ArrowBackRoundedIcon />
                        Previous
                    </Button>
                    <Button variant="contained" color="success" size="medium" onClick={() => setValue(value !== content_topic.length - 1 ? value + 1 : 0)}>
                        Next
                        <ArrowForwardRoundedIcon />
                    </Button>
                </div>
            </div>


        </>
    );
}


