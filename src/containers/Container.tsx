import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Container = ({ children }: Props) => {
	return (
		<div className="flex-1 px-md py-xxs gap-xxs bg-neutral-50">{children}</div>
	);
};

export default Container;
