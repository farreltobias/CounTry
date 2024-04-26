import { v4 as uuid } from 'uuid'
import { EditableQuestion, Question } from 'src/@types/types'
import { QuestionValidation } from './form-validation'

export class QuestionMapper {
  static toEditableQuestion(question: Question): EditableQuestion {
    return {
      id: question.id,
      theme: question.theme,
      title: question.title,
      alternatives: question.alternatives,
      errors: {},
    }
  }

  static toQuestion(editableQuestion: EditableQuestion): Question {
    // zod validation

    const question = QuestionValidation.validate({
      id: editableQuestion.id || uuid(),
      title: editableQuestion.title,
      theme: editableQuestion.theme,
      alternatives: editableQuestion.alternatives,
    })

    return {
      id: question.id,
      theme: question.theme,
      title: question.title,
      alternatives: question.alternatives,
    }
  }
}
