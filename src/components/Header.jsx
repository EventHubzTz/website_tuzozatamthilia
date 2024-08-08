import React from 'react'
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, SvgIcon, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@mui/icons-material';
import { votingUrl } from '../utils/constants';

const drawerWidth = 260;
const navItems = [
    // { label: 'Register Now', route: '/' },
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                backgroundColor: 'common.white',
                height: "100%"
            }}>
            <Link to="/">
                <Typography
                    align='center'
                    variant="h6"
                    sx={{ my: 2, color: "black" }}
                >
                    Tamthilia 2024
                </Typography>
            </Link>
            <Divider sx={{ borderWidth: "0.05px", borderColor: "black" }} />
            <List disablePadding>
                {navItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        component="a"
                        href={votingUrl}
                    >
                        <ListItemButton>
                            <ListItemText primary={item.label} sx={{ color: "black", textAlign: "center" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box
                component="header"
                style={{
                    width: "100%",
                    background: 'rgba(0, 0, 0, 0.4)',
                    position: 'sticky',
                    top: 0,
                    zIndex: (theme) => theme.zIndex.appBar,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="text.primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <SvgIcon fontSize='large' sx={{ color: "white" }}>
                            <MenuOutlined />
                        </SvgIcon>
                    </IconButton>
                    <Link to="/" style={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box
                            component='img'
                            alt="Logo"
                            src="assets/images/tma_logo.png"
                            sx={{
                                width: 80,
                                display: { xs: 'none', sm: 'block' }
                            }}
                        />
                    </Link>
                    <Link to="/" style={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, color: "white" }}
                        >
                            Tamthilia
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: 'white' }}
                                component="a"
                                href={votingUrl}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
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
            </nav>
        </>
    )
}

export default Header