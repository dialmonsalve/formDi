
interface ValidationRule {
	test: (value: string) => boolean | string;
	message: string;
}

class StringValidator {
	private rules: ValidationRule[];

	constructor() {
		this.rules = [];
	}

	required(message: string): this {
		this.rules.push({
			test: (value: string) => value && value.trim().length > 0,
			message,
		});
		return this;
	}

	max(length: number, message: string): this {
		this.rules.push({
			test: (value: string) => value && value.length <= length,
			message,
		});
		return this;
	}

	min(length: number, message: string): this {
		this.rules.push({
			test: (value: string) => value && value.length >= length,
			message,
		});
		return this;
	}

	email(message: string): this {
		this.rules.push({
			test: (value: string) => {
				// A basic email validation regular expression
				const emailRegex = /^\S+@\S+\.\S+$/;
				return emailRegex.test(value);
			},
			message,
		});
		return this;
	}

	validate(value: string): string[] {
		const errors = [];

		for (const rule of this.rules) {
			if (!rule.test(value)) {
				errors.push(rule.message);
			}
		}
		return errors;
	}
}

const initialValues: { [key: string]: any } = {};
const requiredValues: { [key: string]: any } = {};

for (const input of formJson) {

	initialValues[input.name] = input.value;

	if (!input.value) continue;

	let schema = new StringValidator()

	for (const rule of input.validations) {

		if (rule.type === 'required') {
			schema = schema.required(rule.message)
		}
		if (rule.type === 'minLength') {
			schema = schema.min((rule as any).value, rule.message)
		}
		if (rule.type === 'email') {
			schema = schema.email(rule.message)
		}
	}
	requiredValues[input.name] = schema
}
export const Schema = () => {
	return (
		<div>Schema</div>
	)
}
