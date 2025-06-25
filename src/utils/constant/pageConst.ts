import type { ContentType } from "types/pageType";

export const homeData: ContentType = {
	header: {
		title: "Task",
		subTitle: "Pantau dan kelola task anda",
	},
	tableHeader: [
		{ label: "Judul", flex: "flex-2" },
		{ label: "Deskripsi", flex: "flex-2" },
		{ label: "Tanggal Mulai", flex: "flex-1" },
		{ label: "Tanggal Berakhir", flex: "flex-1" },
		{ label: "PIC", flex: "flex-1" },
		{ label: "Status", flex: "flex-1" },
	],
};
