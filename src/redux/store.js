import { createStore} from "redux";
import MobReducers from "./mob/MobReducers";

const store = createStore(MobReducers);

export default store;