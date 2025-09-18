import { Entity } from '@/core/entity/entity.js'
import type { UniqueEntityID } from '@/core/entity/unique-entity-id.js'

import type { InstructorProps } from './@entities.model.js'

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}
