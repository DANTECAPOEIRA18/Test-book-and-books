import { createAction } from "@reduxjs/toolkit";
import { IPerson } from "../interfaces";

const setNewPerson = createAction<IPerson>(
    "setNewPerson",
)

export {
    setNewPerson
}