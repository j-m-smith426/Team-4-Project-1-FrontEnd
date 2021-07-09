import { CreatePostActions, ICreatePostActions, ILoginActions, LoginActions } from "./Actions";
import { IAppState, initialState } from "./State";
import { Reducer } from "./Reducers";

function reduce() {
    let state:IAppState = initialState;
    const newState = {...state};
    test("Reducer to be defined", () => {
        expect(Reducer).toBeDefined();
    }) 
}
reduce();