import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Bruno",
    health: 80,
    hunger: 60,
    energy: 90,
    coins: 100
}

const petSlice = createSlice({
    name: "pet",
    initialState,
    reducers: {
        feed: (state) => {
            state.hunger = Math.min(state.hunger + 20, 100);
            state.health = Math.min(state.health + 5, 100);
        },

        play: (state) => {
            if(state.hunger === 0) {
                state.health = Math.max(state.health - 5, 0);
            }

            if(state.energy === 0){
                state.energy = Math.max(state.energy - 5, 0);
            }

            state.energy = Math.max(state.energy - 15, 0);
            state.hunger = Math.max(state.hunger - 10, 0);
        },

        sleep: (state) => {
            state.energy = Math.min(state.energy + 30, 100);
            state.hunger = Math.max(state.hunger - 10, 0); 
        },

        heal: (state) => {
            if(state.coins >= 20 && state.health < 100){
                state.health = Math.min(state.health + 25, 100);
                state.coins -= 20;
            }
        }
    }
});

export const {feed, play, sleep, heal} = petSlice.actions;
export default petSlice.reducer;