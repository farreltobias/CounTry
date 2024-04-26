import { IconoirProvider } from 'iconoir-react'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { fetchQuizzes } from './features/quizzes/quizzesSlice'
import { useAppDispatch } from './hooks/redux'
import { router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuizzes())
  }, [dispatch])

  return (
    <ThemeProvider theme={defaultTheme}>
      <IconoirProvider iconProps={{ strokeWidth: 3 }}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </IconoirProvider>
    </ThemeProvider>
  )
}
