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
			type: "date",
			name: "startDate",
			label: "Tanggal Mulai",
			placeholder: "DD-MM-YYYY",
			required: true,
			rules: {
				required: "Tanggal mulai harus diisi!",
			},
		},
		{
			type: "date",
			name: "endDate",
			label: "Tanggal Berakhir",
			placeholder: "DD-MM-YYYY",
			required: true,
			rules: {
				required: "Tanggal berakhir harus diisi!",
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
		{
			type: "combo",
			name: "pic",
			label: "PIC",
			placeholder: "Pilih PIC",
			required: true,
			items: [
				{ label: "Tio", value: "tio" },
				{ label: "Novriadi", value: "novriadi" },
				{ label: "Putra", value: "putra" },
			],
			rules: {
				required: "PIC harus dipilih!",
			},
		},
	],
	defaultValues: {
		title: "",
		startDate: "",
		endDate: "",
		description: "",
		pic: null,
	},
};
