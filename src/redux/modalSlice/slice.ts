import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
	isShow: boolean
}

const initialState: ModalState = {
	isShow: false
}

const counterSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal: state => {
			state.isShow = !state.isShow
		}
	}
})

export const { actions, reducer } = counterSlice
