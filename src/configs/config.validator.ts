import Ajv from 'ajv';

import { schema } from './config.schema';

export const validateEnvVars = (data: Record<string, unknown>) => {
  const ajv = new Ajv({ coerceTypes: true });

  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (isValid) {
    const errString = validate.errors
      ?.map(({ instancePath, message }) => `${instancePath} ${message}`)
      .join('\n');
  }

  return data;
};
