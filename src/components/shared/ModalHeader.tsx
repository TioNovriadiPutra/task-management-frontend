import CloseButton from "./CloseButton";

type Props = {
	title: string;
	onClose?: () => void;
};

const ModalHeader = ({ title, onClose }: Props) => {
	return (
		<div className="!flex-row items-center justify-between px-md py-xs border-b border-b-neutral-200">
			<p className="text-bodyM font-semibold text-neutral-900">{title}</p>

			<CloseButton onClose={onClose} />
		</div>
	);
};

export default ModalHeader;
