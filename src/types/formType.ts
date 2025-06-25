import type { RegisterOptions, UseFormReset } from "react-hook-form";

export type ButtonType = {
	label?: string;
	color: string;
	hover: string;
};

export type DropdownType = {
	label: string;
	value: string | number;
};

export type InputType = {
	type: "text" | "textarea" | "combo" | "date";
	name: string;
	label: string;
	placeholder: string;
	required: boolean;
	items?: DropdownType[];
	rules?:
		| Omit<
				RegisterOptions<any, string>,
				"valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
		  >
		| undefined;
};

export type FormType<T> = {
	title: string;
	inputs: InputType[];
	defaultValues: T;
	onSubmit?: (data: { body: any; reset: UseFormReset<any> }) => void;
};
