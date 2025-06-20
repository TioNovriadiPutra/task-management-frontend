import { useLoadingButton, useToast } from "@stores/pageStore";

const useHelper = () => {
	const { showLoading, hideLoading } = useLoadingButton();
	const showToast = useToast((state) => state.showToast);

	const onMutate = (type: "modal" | "button") => {
		if (type === "button") {
			showLoading();
		}
	};

	const onError = (error: string) =>
		showToast({ type: "failed", message: error });

	const onSuccess = (message: string) =>
		showToast({ type: "success", message });

	const onSettled = (type: "modal" | "button") => {
		if (type === "button") {
			hideLoading();
		}
	};

	return {
		onMutate,
		onError,
		onSuccess,
		onSettled,
	};
};

export default useHelper;
