import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/AdminReducer";

export const AdminDispatchContext = createContext<Dispatch<IAction>>(
  () => {
    return;
  }
);
