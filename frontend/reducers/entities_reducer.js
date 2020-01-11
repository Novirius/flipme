import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import foldersReducer from './folder_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  folders: foldersReducer
});

export default entitiesReducer;