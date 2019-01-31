import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from '../home/Home'
import Second from '../home/Second'

const Root = () => (
    <div>
        <Switch>
            <Route path="/home/home" component={Home}/>
            <Route path="/home/second" component={Second}/>
        </Switch>
    </div>
)

export default Root