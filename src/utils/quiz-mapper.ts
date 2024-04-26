import { EditableQuiz, Quiz } from 'src/@types/types'
import { v4 as uuid } from 'uuid'
import { QuizValidation } from './form-validation'

export class QuizMapper {
  static toEditableQuiz(quiz: Quiz): EditableQuiz {
    return {
      slug: quiz.slug,
      title: quiz.title,
      questions: quiz.questions,
      errors: {},
    }
  }

  static toQuiz(editableQuiz: EditableQuiz): Quiz {
    // zod validation

    const quiz = QuizValidation.validate({
      slug: editableQuiz.slug || uuid(),
      title: editableQuiz.title,
      questions: editableQuiz.questions,
    })

    return {
      slug: quiz.slug || uuid(),
      title: quiz.title,
      questions: quiz.questions,
    }
  }
}
