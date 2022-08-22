import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAnimeOpened: false,
    isCartoonOpened: false,
    allHoodies: true,
    activeAnime: 0,
    activeCartoon: 0,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setIsAnimeOpened(state) {
      state.isAnimeOpened = !state.isAnimeOpened
      state.isCartoonOpened = false
    },
    setIsCartoonOpened(state){
      state.isCartoonOpened = !state.isCartoonOpened
      state.isAnimeOpened = false
    },
    setActiveAnime(state, action){
      state.activeAnime = action.payload
      state.allHoodies = false
      state.activeCartoon = false
      state.isAnimeOpened = false
    },
    setActiveCartoon(state, action){
      state.activeCartoon = action.payload
      state.allHoodies = false
      state.activeAnime = false
      state.isCartoonOpened = false
    },
    setAllHodies(state){
      state.allHoodies = true
      state.activeAnime = false
      state.activeCartoon = false
      state.isCartoonOpened = false
      state.isAnimeOpened = false
    }
  },
})

export const { setIsAnimeOpened, setIsCartoonOpened, setActiveAnime, setActiveCartoon, setAllHodies } = navigationSlice.actions

export default navigationSlice.reducer