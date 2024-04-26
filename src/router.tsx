import { createBrowserRouter } from 'react-router-dom'

import { ContainerLayout } from './layouts/Container'
import { FormLayout } from './layouts/Form'
import { MainLayout } from './layouts/Main'
import { NotFound } from './pages/404'
import { Home } from './pages/home'
import { Quizzes } from './pages/quizzes'
import { Quiz } from './pages/quizzes/:slug'
import { Question } from './pages/quizzes/:slug/:number'
import { EditQuiz } from './pages/quizzes/:slug/edit'
import { Result } from './pages/quizzes/:slug/result'
import { NewQuiz } from './pages/quizzes/new'

export const router = createBrowserRouter([
  {
    path: '/quizzes',
    element: <FormLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/quizzes/new',
        element: <NewQuiz />,
      },
      {
        path: '/quizzes/:slug/edit',
        // loader: editQuizLoader,
        element: <EditQuiz />,
      },
    ],
  },
  {
    path: '/quizzes',
    element: <ContainerLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/quizzes',
        element: <Quizzes />,
      },
      {
        path: '/quizzes/:slug',
        element: <Quiz />,
      },
      {
        path: '/quizzes/:slug/:number',
        element: <Question />,
      },
      {
        path: '/quizzes/:slug/result',
        element: <Result />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
