import type { AddTaskInput } from "@interfaces/taskInterface";
import type { FormType } from "types/formType";

export const addTaskForm: FormType<AddTaskInput> = {
	title: "Tambah Task",
	inputs: [
		{
			type: "text",
			name: "title",
			label: "Judul",
			placeholder: "Masukan judul disini...",
			required: true,
			rules: {
				required: "Judul harus diisi!",
			},
		},
		{
			type: "textarea",
			name: "description",
			label: "Deskripsi",
			placeholder: "Masukan deskripsi disini...",
			required: true,
			rules: {
				required: "Deskripsi harus diisi!",
			},
		},
	],
	defaultValues: {
		title: "",
		description: "",
	},
};
