import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { reducer as reduxFormReducer } from 'redux-form';

 const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: reduxFormReducer
  },
});

export default store;
