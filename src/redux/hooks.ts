import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch, useSelector, useStore } from "react-redux"
import { actions } from "./modalSlice/slice"
import type { AppDispatch, AppStore, RootState } from "./store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
