import { EditableQuestion, EditableQuiz } from 'src/@types/types'
import * as z from 'zod'

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type && issue.path[0] === 'theme') {
    return { message: 'Please select a theme' }
  }

  return { message: ctx.defaultError }
}

z.setErrorMap(customErrorMap)

type QuestionErrorFormatted = {
  title?: { _errors: Array<string> }
  theme?: { _errors: Array<string> }
  alternatives?: { _errors: Array<string> }
}

type QuizErrorFormatted = {
  title?: { _errors: Array<string> }
  questions?: { _errors: Array<string> }
}

export class QuestionValidation {
  static schema = z.object({
    id: z.string(),
    title: z.string().min(1, 'Please insert a Title'),
    theme: z.object({
      value: z.string(),
      label: z.string(),
    }),
    alternatives: z
      .array(
        z.object({
          label: z.string(),
          value: z.string().min(1, 'An Alternative is required'),
          image: z.string().optional(),
          correct: z.boolean(),
        }),
      )
      .min(2, 'At least two alternatives are required')
      .max(4, 'At most four alternatives are allowed'),
  })

  static validate(data: Record<string, unknown>) {
    return QuestionValidation.schema.parse(data)
  }

  static formatError(e: z.ZodError): EditableQuestion['errors'] {
    const error = e.format() as QuestionErrorFormatted

    return {
      title: error?.title?._errors.join(', '),
      theme: error?.theme?._errors.join(', '),
      alternatives: error?.alternatives?._errors.join(', '),
    }
  }
}

export class QuizValidation {
  static QuizValidationSchema = z.object({
    slug: z.string(),
    title: z.string().min(1, 'Please insert a Title'),
    questions: z
      .array(QuestionValidation.schema)
      .min(1, 'At least one question is required'),
  })

  static validate(data: Record<string, unknown>) {
    return QuizValidation.QuizValidationSchema.parse(data)
  }

  static formatError(e: z.ZodError): EditableQuiz['errors'] {
    const error = e.format() as QuizErrorFormatted

    return {
      title: error?.title?._errors.join(', '),
      questions: error?.questions?._errors.join(', '),
    }
  }
}
