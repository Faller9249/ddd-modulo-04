import type { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import type { Slug } from '../modules/forum/enterprise/entities/value-objects/slug.js'
import type { Question } from '../modules/forum/enterprise/entities/question.js'
import type { Answer } from '../modules/forum/enterprise/entities/answer.js'
import type { QuestionComment } from '@/modules/forum/enterprise/entities/question-comment.js'
import type { AnswerComment } from '@/modules/forum/enterprise/entities/answer-comment.js'
import type { Either } from '@/core/either.js'
import type { ResourceNotFoundError } from '@/core/errors/resource-not-found-error.js'
import type { NotAllowedError } from '@/core/errors/not-allowed-error.js'
import type { QuestionAttachmentList } from '@/modules/forum/enterprise/entities/question-attachment-list.js'
import type { AnswerAttachmentList } from '@/modules/forum/enterprise/entities/answer-attachment-list.js'

export interface StudentProps {
  name: string
}

export interface InstructorProps {
  name: string
}

export interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  attachments: QuestionAttachmentList
  createdAt: Date
  updatedAt?: Date
}

export interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  attachments: AnswerAttachmentList
  createdAt: Date
  updatedAt?: Date
}

export interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
  attachmentsIds: string[]
}
export interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  attachmentsIds: string[]
  content: string
}

export type AnswerQuestionUseCaseResponse = Either<
  null,
  {
    answer: Answer
  }
>
export type CreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question
  }
>

export interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

export type GetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    question: Question
  }
>

export interface FetchRecentQuestionsUseCaseRequest {
  page: number
}

export type FetchRecentQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

export interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

export type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: Answer[]
  }
>

export interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

export type FetchQuestionCommentsUseCaseResponse = Either<
  null,
  {
    questionComments: QuestionComment[]
  }
>

export interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
  attachmentsIds: string[]
}

export interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
  attachmentsIds: string[]
}

export type EditQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>
export type EditAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    answer: Answer
  }
>

export interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

export type FetchAnswerCommentsUseCaseResponse = Either<
  null,
  {
    answerComments: AnswerComment[]
  }
>
export interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export type DeleteAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  object
>

export interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

export type DeleteQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  object
>

export interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export type ChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>
export interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

export type CommentOnQuestionUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    questionComment: QuestionComment
  }
>
export interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

export interface CommentOnAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

export type CommentOnAnswerUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    answerComment: AnswerComment
  }
>
export type DeleteQuestionCommentUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  object
>

export interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

export type DeleteAnswerCommentUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  object
>
