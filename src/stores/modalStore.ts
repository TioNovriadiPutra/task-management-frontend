import type { FormType } from "types/formType";
import type { ConfirmationType } from "types/pageType";
import type { ConfirmationModalType, FormModalType } from "types/stateType";
import { create } from "zustand";

export const useFormModal = create<FormModalType>((set) => ({
	show: false,
	data: null,
	showModal: (data: FormType<any>) => set(() => ({ show: true, data })),
	hideModal: () => set(() => ({ show: false, data: null })),
}));

export const useConfirmationModal = create<ConfirmationModalType>((set) => ({
	show: false,
	data: null,
	showModal: (data: ConfirmationType) => set({ show: true, data }),
	hideModal: () => set({ show: false, data: null }),
}));
