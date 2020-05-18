import { createStore, combineReducers } from 'redux';
import reducerDrawer from './reducerDrawer';
import reducerMessage from './reducerMessage';
import reducerTodos from './reducerTodos';
import reducerIncrement from './reducerIncrement';

const combinedReducer = combineReducers({ reducerDrawer, reducerMessage, reducerTodos, reducerIncrement });

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_TODO = 'ADD_TODO';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const toggleDrawerOpen = isDrawerOpen => ({
    type: TOGGLE_DRAWER, isDrawerOpen
});

export const sendMessageData = messageData => ({
    type: SEND_MESSAGE, messageData
});

// preloadedState will be passed in by the plugin
export default preloadedState => createStore(combinedReducer, preloadedState);
