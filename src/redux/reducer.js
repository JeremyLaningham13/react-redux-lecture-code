const initialState = {
    avengers: [
        {id: 1, name: 'Iron Man'},
        {id: 2, name: 'Captain America'},
        {id: 3, name: 'Thor'},
        {id: 4, name: 'Hulk'},
        {id: 5, name: 'Black Widow'},
        {id: 6, name: 'Hawkeye'}
    ]
}

const ADD_AVENGER = 'ADD_AVENGER';

export function addAvenger(avengerObj){
    return {
        type: ADD_AVENGER,
        payload: avengerObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADD_AVENGER:
            let newAvengers = state.avengers.slice();
            newAvengers.push(payload)
            
            return {...state, avengers: newAvengers};
        default:
            return state;
    }
}