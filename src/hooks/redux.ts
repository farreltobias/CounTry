import { useDispatch, useSelector, useStore } from 'react-redux'
import type { FormDispatch, FormState, FormStore } from 'src/layouts/Form/store'

import type { AppDispatch, AppStore, RootState } from '../store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export const useFormDispatch = useDispatch.withTypes<FormDispatch>()
export const useFormSelector = useSelector.withTypes<FormState>()
export const useFormStore = useStore.withTypes<FormStore>()
