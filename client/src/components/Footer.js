import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inventory" icon={<ShoppingCartTwoToneIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon />} />
        <BottomNavigationAction label="Logout" icon={<LogoutTwoToneIcon />} />
      </BottomNavigation>
    </Box>
  );
}