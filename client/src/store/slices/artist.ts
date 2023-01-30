// src/store/slices/artist.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtistState {
    name: string;
    genre: string;
}

const initialState: ArtistState = {
    name: '',
    genre: '',
};

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        setArtist: (state, action: PayloadAction<ArtistState>) => {
            state.name = action.payload.name;
            state.genre = action.payload.genre;
        },
    },
});

export const { setArtist } = artistSlice.actions;
export default artistSlice.reducer;
