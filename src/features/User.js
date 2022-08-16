import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            nom: '',
            prenom: '',
            adresse: ''
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;

        },
        setNom: (state, action) => {
            state.nom = action.payload;
        }
    }
});
export const {login, setNom} = userSlice.actions;
export default userSlice.reducer;