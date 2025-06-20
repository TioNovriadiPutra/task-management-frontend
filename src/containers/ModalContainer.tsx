import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const ModalContainer = ({ children }: Props) => {
	return (
		<div className="absolute w-full h-full bg-modal items-center justify-center">
			{children}
		</div>
	);
};

export default ModalContainer;
