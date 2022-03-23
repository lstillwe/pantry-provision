import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid  } from '@fortawesome/fontawesome-svg-core/import.macro';

const Beverage = <FontAwesomeIcon icon={solid('glass-whiskey')}/>;
const Fruit = <FontAwesomeIcon icon={solid('apple-whole')}/>;
const Meat = <FontAwesomeIcon icon={solid('bacon')}/>;
const Bread = <FontAwesomeIcon icon={solid('bread-slice')}/>;
const Grains = <FontAwesomeIcon icon={solid('seedling')}/>;
const Dairy = <FontAwesomeIcon icon={solid('cheese')}/>;
const Vegetable = <FontAwesomeIcon icon={solid('carrot')}/>;
const DryGoods = <FontAwesomeIcon icon={solid('toilet-paper')}/>;
const Frozen = <FontAwesomeIcon icon={solid('ice-cream')}/>;
const Other = <FontAwesomeIcon icon={solid('basket-shopping')}/>;

export const Categories = [
  "beverage",
  "fruit",
  "meat",
  "bread",
  "grains",
  "dairy",
  "vegetable",
  "dry goods",
  "frozen"
];

export function getFA_Icon(category) {
  let icon = "";
  
  switch (category) {
      case "beverage":
          icon = Beverage;
          break;
      case "fruit":
          icon = Fruit;
          break;
      case "meat":
          icon = Meat;
          break;
      case "bread":
          icon = Bread;
          break;
      case "grains":
          icon = Grains;
          break;
      case "dairy":
          icon = Dairy;
          break;
      case "vegetable":
          icon = Vegetable;
          break;
      case "dry goods":
          icon = DryGoods;
          break;
      case "frozen":
          icon = Frozen;
          break;
      default:
          icon = Other;
          break;
  }

  return icon;
}

const ItemCategories = [
  {
    value: '{beverage}',
    label: '{Beverage}',
  },
  {
    value: '{fruit}',
    label: '{Fruit}',
  },
  {
    value: '{meat}',
    label: '{Meat}',
  },
  {
    value: '{bread}',
    label: '{Bread}',
  },
  {
    value: '{grains}',
    label: '{Grains}',
  },
  {
    value: '{dairy}',
    label: '{Dairy}',
  },
  {
    value: '{dry goods}',
    label: '{DryGoods}',
  },
  {
    value: '{frozen}',
    label: '{Frozen}',
  },
];

export default function AddItemForm() {
  const [Items, setItems] = React.useState({ItemCategories});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItems(event.currentTarget.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Grocery"
          value={Items}
          onChange={handleChange}
          helperText="Please Select a Grocery Item"
        >
          {ItemCategories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
