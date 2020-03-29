import * as React from 'react';
//import { Typography } from 'antd';
import { All } from './Router';
import {BrowserRouter,Route, Switch} from "react-router-dom";


export default function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/home/" component={All} />
      <Route component={All} />
    </Switch>
  </BrowserRouter>

}
