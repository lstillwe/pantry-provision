import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Paper, Button, ButtonGroup, Grid} from '@mui/material';
import QuantityButton from './components/QuantityButton.js';

class Tile extends React.Component {
    constructor(props) {
        this.QuantityButton;
    }
    render(){
        return (
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardHeader></CardHeader>
                        <CardMedia></CardMedia>
                        <CardContent>
                        </CardContent> 
                    </ CardActionArea>
                    <CardActions>
                        <div>{this.props}</div>
                    </ CardActions>
                </Card>
            </div>
            );
        }
    }


