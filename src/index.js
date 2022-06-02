import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './app/store';
import OrderForm from './containers/FieldLevelValidationForm';
import "./styles/main.css";
import "./styles/main.scss";
import './styles/fonts.css';
import MainTitle from './components/MainTitle';
import Header from './components/Header';


const rootEl = document.getElementById('root');


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Header/>
    <MainTitle title={'Order Details'} desc={'Ready to join the world’s most ambitious luxury marketplace?'}/>
      <div>
        <OrderForm 
        onSubmit={console.log('su')} 
        />
      </div>
      </div>

    </MuiThemeProvider>
  </Provider>,
  rootEl,
);
