// src/store/slices/player.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
    currentSong: string;
    isPlaying: boolean;
}

const initialState: PlayerState = {
    currentSong: '',
    isPlaying: false,
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setCurrentSong: (state, action: PayloadAction<string>) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setCurrentSong, setIsPlaying } = playerSlice.actions;
export default playerSlice.reducer;
