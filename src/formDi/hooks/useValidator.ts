import { ValidationRule } from "../interfaces/initialState";

export interface Validator {
  rules: ValidationRule[];
  required(message: string): Validator;
  max(length: number, message: string): Validator;
  min(length: number, message: string): Validator;
  email(message: string): Validator;
  validate(value: string): string[];
}

export const useValidator = (rules: ValidationRule[]) => {
  const validator:Validator = {
    rules,
    required(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.trim().length > 0,
        message,
      });
      return validator;
    },
    max(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length <= length,
        message,
      });
      return validator;
    },
    min(length: number, message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => value && value.length >= length,
        message,
      });
      return validator;
    },
    email(message: string): typeof validator {
      validator.rules.push({
        test: (value: string) => {
          const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRegex.test(value);
        },
        message,
      });
      return validator;
    },
    validate(value: string): string[] {
      const errors = [];

      for (const rule of validator.rules) {
        if (!rule.test(value)) {
          errors.push(rule.message);
        }
      }
      return errors;
    },
  };

  return validator;
};