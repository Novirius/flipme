export const fetchUserDecks = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/decks`
    })
)

export const fetchCategoryDecks = (categoryId) => (
    $.ajax({
        method: 'GET',
        url: `/api/categories/${categoryId}/decks`
    })
)

export const fetchSubCategoryDecks = (subCategoryId) => (
    $.ajax({
        method: 'GET',
        url: `/api/sub_categories/${subCategoryId}/decks`
    })
)

export const fetchDeck = (id) => (
    $.ajax({
        url: `/api/decks/${id}`,
        method:'GET'
    })
)

export const createDeck = deck => (
    $.ajax({
        url: 'api/decks',
        method: 'POST',
        data: {deck}
    })
)

export const updateDeck = deck => (
    $.ajax({
        url: `api/decks/${deck.id}`,
        method:'PATCH',
        data: {deck}
    })
)

export const deleteDeck = id => (
    $.ajax({
        url: `/api/decks/${id}`,
        method: 'DELETE'
    })
)

export const searchDecks = (query) => (
    $.ajax({
        url: `api/decks/search/${query}`,
        method: 'GET'
    })
)