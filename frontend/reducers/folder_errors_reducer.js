import {RECEIVE_FOLDER_ERRORS} from '../actions/folder_actions';

const folderErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_FOLDER_ERRORS:
        return action.errors;
      default:
        return state;
    }
};

export default folderErrorsReducer;
  