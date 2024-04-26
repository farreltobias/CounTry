import { Plus, Search } from 'iconoir-react'
import { Logo } from '../../components/Logo'
import { Button } from 'src/components/Button'
import {
  Header,
  MainContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles'
import { Input } from 'src/components/Input'
import { QuizCard } from 'src/components/QuizCard'
import { Table } from 'src/components/Table'
import { useAppSelector } from 'src/hooks/redux'
import { createRef, useState } from 'react'

export function Quizzes() {
  const inputRef = createRef<HTMLInputElement>()
  const initialQuizzes = useAppSelector((state) => state.quizzes.entities)

  const [quizzes, setQuizzes] = useState(initialQuizzes)

  const filterQuizzes = (input: string) => {
    const formatText = (text: string) =>
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

    const filteredQuizzes = initialQuizzes.filter(({ title }) =>
      formatText(title).includes(formatText(input))
    )

    setQuizzes(filteredQuizzes)
  }

  const handleFilter = () => {
    if (!inputRef.current) return

    filterQuizzes(inputRef.current.value)
  }

  return (
    <>
      <Logo asTag />

      <MainContainer>
        <Header>
          <TitleContainer>
            <Title>My Quizzes</Title>
            <Subtitle>
              Create a new quiz, edit one below, or share the playable link with
              your friends!
            </Subtitle>
          </TitleContainer>

          <Button.Root size="sm" to={'/quizzes/new'}>
            Create
            <Button.Icon icon={<Plus />} />
          </Button.Root>
        </Header>

        <Table.Root>
          <Table.Header>
            <Input.Root
              ref={inputRef}
              placeholder="Filter your quizzes"
              type="search"
              onChange={handleFilter}
            >
              <Input.Icon icon={<Search />} />
            </Input.Root>
          </Table.Header>

          <Table.Body>
            {quizzes.map(({ questions, slug, title }) => (
              <li key={slug}>
                <QuizCard
                  title={title}
                  total={questions.length}
                  icon="🗺️"
                  slug={slug}
                />
              </li>
            ))}
          </Table.Body>
        </Table.Root>
      </MainContainer>
    </>
  )
}
