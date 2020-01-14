import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import foldersReducer from './folder_reducer';
import decksReducer from './deck_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  folders: foldersReducer,
  decks: decksReducer
});

export default entitiesReducer;