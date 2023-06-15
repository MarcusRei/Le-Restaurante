import { createContext } from "react";
import { IFormHandling } from "../components/BookingsList";

export const FormHandlingContext = createContext<IFormHandling>({});
