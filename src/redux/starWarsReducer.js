import axios from 'axios';

const initialState = {
    characters: [],
    loading: false,
    errormessage: ''
}

const GET_CHARACTERS = 'GET_CHARACTERS';

export function getCharacters(){
    const characterArr = axios.get("https://pokeapi.co/api/v2/pokemon/1/")
                        .then(res => res.data)
                        .catch(err => err.message)

    return {
        type: GET_CHARACTERS,
        payload: characterArr
    }
}

export default function starWarsReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_CHARACTERS + '_PENDING':
            return {...state, loading: true};
        case GET_CHARACTERS + '_FULFILLED': 
            return {...state, characters: payload, loading: false};   
        case GET_CHARACTERS + '_REJECTED':
            return {...state, errormessage: payload, loading: false};
        default:
            return state;
    }
}