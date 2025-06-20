import type { LoadingType, ToastType } from "types/stateType";
import { create } from "zustand";

export const useToast = create<ToastType>((set) => ({
	show: false,
	type: "failed",
	message: "Task Disimpan!|Data task berhasil ditambahkan!",
	showToast: (data) => set({ show: true, ...data }),
	hideToast: () => set({ show: false, type: "failed", message: "" }),
}));

export const useLoadingButton = create<LoadingType>((set) => ({
	show: false,
	showLoading: () => set({ show: true }),
	hideLoading: () => set({ show: false }),
}));
