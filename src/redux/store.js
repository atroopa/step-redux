import { createStore} from "redux";
import mobReducer from "./mob/mobReducers";

const store = createStore(mobReducer);

export default store;