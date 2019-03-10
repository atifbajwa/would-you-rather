import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer';
import Grid from '@material-ui/core/Grid';

import './Home.css';

  
class Home extends Component {

    state = {
      value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <div className="homeContainer">
                <Paper >
                    <Grid container spacing={16} justify="center" >
                        <Grid item xs={12}>
                            <Tabs value={value} onChange={this.handleChange}  variant="fullWidth">
                                <Tab label="Unanswered Questions" />
                                <Tab label="Answered Questions" />
                            </Tabs>    
                        </Grid>
                        <Grid item xs={12}>
                            {value === 0 && <TabContainer>Item One</TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}   
                        </Grid>
                    </Grid>

                    
                </Paper>
            </div>
        );
    }
}

export default Home;
