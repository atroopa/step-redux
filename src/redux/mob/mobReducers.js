import { BUY_MOB } from "./actionsType";

const initialState = {
    numOfMobs: 100
}

const mobReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ... state,
                    numOfMobs: state.numOfMobs -1 
            }
    
        default:
            state
    }
}

export default mobReducer;