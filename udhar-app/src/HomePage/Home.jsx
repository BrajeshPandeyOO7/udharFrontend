import React from "react";
import CardPage from "../Tool/CardPage";
import useStyles from '../MaterialStyle/HomeStyle'

const Home = (props) => {

    const classes = useStyles();

    return(
        <>
            <div className={classes.cardAssemble}>
                 <CardPage/>
            </div>
        </>
    )   
} 

export default Home;