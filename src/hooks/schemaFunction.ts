interface ValidationRule {
  test: (value: string) => boolean | string;
  message: string;
}

export const createValidator = (rules: ValidationRule[]) => {
  return {
    rules,
    required(message: string): typeof this {
      this.rules.push({
        test: (value: string) => value && value.trim().length > 0,
        message,
      });
      return this;
    },
    max(length: number, message: string): typeof this {
      this.rules.push({
        test: (value: string) => value && value.length <= length,
        message,
      });
      return this;
    },
    min(length: number, message: string): typeof this {
      this.rules.push({
        test: (value: string) => value && value.length >= length,
        message,
      });
      return this;
    },
    email(message: string): typeof this {
      this.rules.push({
        test: (value: string) => {
          // A basic email validation regular expression
          const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRegex.test(value);
        },
        message,
      });
      return this;
    },
    validate(value: string): string[] {
      const errors = [];

      for (const rule of this.rules) {
        if (!rule.test(value)) {
          errors.push(rule.message);
        }
      }
      return errors;
    },
  };
};