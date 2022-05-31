import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './app/store';
import FieldLevelValidationForm from './containers/FieldLevelValidationForm';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{ padding: 15 }}>
        <h2>Material UI Example</h2>
        <FieldLevelValidationForm 
        //onSubmit={showResults} 
        />
      </div>
    </MuiThemeProvider>
  </Provider>,
  rootEl,
);
