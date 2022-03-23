import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid  } from '@fortawesome/fontawesome-svg-core/import.macro'

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