import { Model } from 'objection';

export class UserObjection extends Model {
  static get tableName() {
    return 'user_objection';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: ['integer', 'null'] },
        email: { type: 'string', minLength: 1, maxLength: 255, unique: true },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        profileImage: { type: 'string', minLength: 1, maxLength: 255 },
        createdAt: {},
        updatedAt: {},
      },
    };
  }
}
