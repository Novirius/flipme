import * as APIUtil from '../util/folders_api_util';

export const RECEIVE_ALL_FOLDERS = 'RECEIVE_ALL_FOLDERS';
export const RECEIVE_FOLDER = 'RECEIVE_FOLDER';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';
export const RECEIVE_FOLDER_ERRORS = 'RECEIVE_FOLDER_ERRORS';

export const receiveFolders = folders => ({
    type: RECEIVE_ALL_FOLDERS,
    folders: folders
})

export const receiveFolder = folder => ({
    type: RECEIVE_FOLDER,
    folder: folder
})

export const removeFolder = folderId => ({
    type: REMOVE_FOLDER,
    folderId: folderId
})

export const folderErrors = errors => ({
    type: RECEIVE_FOLDER_ERRORS,
    errors: errors
})

export const fetchFolders = () => dispatch => (
    APIUtil.fetchFolders()
    .then(
        folders => dispatch(receiveFolders(folders)),
        errors => dispatch(folderErrors(errors))
    )
);

export const fetchFolder = id => dispatch => (
    APIUtil.fetchFolder(id)
    .then(
        folder => dispatch(receiveFolder(folder)),
        errors => dispatch(folderErrors(errors))
    )
);

export const createFolder = folder => dispatch => (
    APIUtil.createFolder(folder)
    .then(
        folder => dispatch(receiveFolder(folder)),
        errors => dispatch(folderErrors(errors.responseJSON)) 
    )
)

export const updateFolder = folder => dispatch => (
    APIUtil.updateFolder(folder)
    .then(
        folder => dispatch(receiveFolder(folder)),
        errors => dispatch(folderErrors(errors.responseJSON))
    )
)

export const deleteFolder = folderId => dispatch => (
    APIUtil.deleteFolder(folderId)
    .then(
        () => dispatch(removeFolder(folderId)),
        errors => dispatch(folderErrors(errors))
    )
)

