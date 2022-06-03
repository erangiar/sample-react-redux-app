import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './app/store';
import "./styles/main.css";
import "./styles/main.scss";
import './styles/fonts.css';
import MainTitle from './components/MainTitle';
import Header from './components/Header';
import NavBar from './components/NavBar';
import OrderContainer from './containers/OrderContainer';


const rootEl = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{overflowX:'hidden'}}>
        <NavBar/>
        <Header/>
      <div>
        <OrderContainer 
        />
      </div>
      </div>

    </MuiThemeProvider>
  </Provider>,
  rootEl,
);
