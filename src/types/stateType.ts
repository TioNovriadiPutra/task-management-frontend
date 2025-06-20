import type { FormType } from "./formType";
import type { ConfirmationType } from "./pageType";

export type FormModalType = {
	show: boolean;
	data: FormType<any> | null;
	showModal: (data: FormType<any>) => void;
	hideModal: () => void;
};

export type ConfirmationModalType = {
	show: boolean;
	data: ConfirmationType | null;
	showModal: (data: ConfirmationType) => void;
	hideModal: () => void;
};

export type ToastType = {
	show: boolean;
	type: "success" | "failed";
	message: string;
	showToast: (data: { type: "success" | "failed"; message: string }) => void;
	hideToast: () => void;
};

export type LoadingType = {
	show: boolean;
	showLoading: () => void;
	hideLoading: () => void;
};
