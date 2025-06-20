type Props = {
	onClose?: () => void;
};

const CloseButton = ({ onClose }: Props) => {
	return (
		<button
			type="button"
			className="rounded-sm hover:bg-neutral-200 transition-colors duration-300"
			onClick={(e) => {
				e.preventDefault();
				if (onClose) onClose();
			}}
		>
			<img src="close.svg" alt="Close Icon" className="size-md " />
		</button>
	);
};

export default CloseButton;
