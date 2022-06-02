import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { reducer as reduxFormReducer } from 'redux-form';
import orderReducer from '../reducers/orderReducer';

 const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: reduxFormReducer,
    order:orderReducer
  },
});

export default store;