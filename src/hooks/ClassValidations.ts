
interface ValidationRule {
	test: (value: string) => boolean | string;
	message: string;
}

export class StringValidator {
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
				const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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