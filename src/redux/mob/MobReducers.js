
import { BUY_MOB } from "./ActionsType"

const initialState = {
    numOfMobs: 100
}

const MobReducers = (state=initialState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ...state,
                    numOfMobs: state.numOfMobs-1,
            }
    
        default:
            return state
    }
}

export default MobReducers;