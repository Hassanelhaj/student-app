import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "./slices/StudentsSlice";

const Store = configureStore({
    reducer:{students:StudentsSlice}
});
export default Store;