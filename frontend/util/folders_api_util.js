export const fetchFolders = () => (
    $.ajax({
        method: 'GET',
        url: `/api/folders`
    })
)

export const fetchFolder = (folderId) => (
    $.ajax({
        url: `/api/folders/${folderId}`,
        method:'GET'
    })
)

export const createFolder = folder => (
    $.ajax({
        url: 'api/folders',
        method: 'POST',
        data: {folder}
    })
)

export const updateFolder = folder => (
    $.ajax({
        url: `api/folders/${folder.id}`,
        method:'PATCH',
        data: {folder}
    })
)

export const deleteFolder = id => (
    $.ajax({
        url: `/api/folders/${id}`,
        method: 'DELETE'
    })
)