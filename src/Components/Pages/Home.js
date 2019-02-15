import React, { Component } from "react";
import Header from '../Home/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
import Introduction from "../Home/Introduction";

library.add(faLevelDownAlt);

class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Introduction />
            </div>
        )
    }
}

export default Home;