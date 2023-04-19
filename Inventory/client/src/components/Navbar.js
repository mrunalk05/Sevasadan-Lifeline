
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./" exact>Inventory</Tabs>
                <Tabs to="all" exact>All Stock</Tabs>
                <Tabs to="add" exact>Add Stock</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;