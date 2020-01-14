export const fetchDecks = () => (
    $.ajax({
        method: 'GET',
        url: `/api/decks`
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