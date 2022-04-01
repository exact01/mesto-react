
//api 
export const configVersionOneApi = {
    url: "https://mesto.nomoreparties.co/v1/cohort-30",
    cohort: "/cohort-30",
    headers: { 
        Authorization: '4536fb85-801b-4a38-930f-997399689a92',
        'Content-Type': 'application/json'
    },
    methods: {
        post: "POST",
        get: "GET",
        delete: "DELETE",
        put: "PUT",
        patch: "PATCH"
    },
    requests: { // suddenly api change ;)
        cards: "/cards",
        users: "/users",
        me: "/me",
        likes: "/likes",
        avatar: "/avatar"
    }
};