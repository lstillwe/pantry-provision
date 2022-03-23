import {
    Link, LinkProps, MemoryRouter
  } from 'react-router-dom';
  import { StaticRouter } from 'react-router-dom/server';
  import Button from '@mui/material/Button';
  import IconButton from '@mui/material/IconButton';
  import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
  
  export default function IconButtons() {
    return (
        <Router>
            <div>
                <IconButton color="primary" aria-label="add to shopping cart" Link="{To add forum}">
                <AddShoppingCartIcon />
                </IconButton>
            </div>
        </Router>
        );
    }
  