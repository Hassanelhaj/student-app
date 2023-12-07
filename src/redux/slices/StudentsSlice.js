import { createSlice } from "@reduxjs/toolkit";

const StudentsSlice = createSlice({
  name: "students",
  initialState: [],
  error:null,
  
  reducers: {
    appendStudent: (state, action) => {
      state.push(action.payload);
    },
    deleteStudent: (state, action) => {
        const id = action.payload.id; 
      console.log("deleting a student with id ",id);

      const state = state.filter((student) => {
        return id !== student.id;
      });
 
    },
  },
});
export const { appendStudent,deleteStudent } = CartSlice.actions;
export default StudentsSlice.reducer;
