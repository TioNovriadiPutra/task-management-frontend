import type { ButtonType } from "./formType";

export type ContentHeaderType = {
	title: string;
	subTitle: string;
};

export type ConfirmationType = ContentHeaderType & {
	onConfirm: () => void;
	button: ButtonType;
};

export type TableHeaderType = {
	label: string;
	flex: string;
};

export type TableRowType = TableHeaderType & { type: "text" | "status" };

export type TableFuncType = {
	icon: string;
	onClick: () => void;
	disabled: boolean;
};

export type TableContentType = {
	content: TableRowType[];
	func: TableFuncType[];
};

export type ContentType = {
	header: ContentHeaderType;
	tableHeader: TableHeaderType[];
};
