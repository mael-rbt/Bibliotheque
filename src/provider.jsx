import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";

const LibrairieContext = createContext();

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <LibrairieContext.Provider value={[state, dispatch]}>
            {children}
        </LibrairieContext.Provider>
    );
};

export {LibrairieContext, Provider};