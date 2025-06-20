import { useLoadingButton } from "@stores/pageStore";
import CustomButton from "./CustomButton";
import type { ButtonType } from "types/formType";

type Props = {
	buttonData: ButtonType;
	onClose?: () => void;
	onConfirm?: () => void;
};

const ModalFooter = ({ buttonData, onClose, onConfirm }: Props) => {
	const loadingButton = useLoadingButton((state) => state.show);

	return (
		<div className="!flex-row items-center justify-end px-md py-xxs gap-xxs">
			<CustomButton
				buttonData={{
					label: "Batalkan",
					color: "bg-neutral-0",
					hover: "bg-neutral-200",
				}}
				onClick={onClose}
			/>

			<CustomButton
				buttonData={buttonData}
				type="submit"
				isLoading={loadingButton}
				onClick={onConfirm}
			/>
		</div>
	);
};

export default ModalFooter;
