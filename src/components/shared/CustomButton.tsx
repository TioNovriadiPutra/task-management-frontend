import type { ButtonType } from "types/formType";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";

type Props = {
	buttonData: ButtonType;
	type?: "submit" | "button";
	icon?: string;
	isLoading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
};

const CustomButton = ({
	buttonData,
	type = "button",
	icon,
	isLoading,
	disabled,
	onClick,
}: Props) => {
	return (
		<button
			type={type}
			className={`${
				disabled ? "bg-neutral-200 !cursor-default" : buttonData.color
			} ${
				!disabled && `hover:${buttonData.hover} transition-colors duration-300`
			} px-[12px] py-[7px] rounded-md ${
				buttonData.color === "bg-neutral-0" && "!border !border-neutral-200"
			}`}
			disabled={disabled}
			onClick={onClick}
		>
			{isLoading ? (
				<Ring2
					size="17"
					stroke="2"
					strokeLength="0.25"
					bgOpacity="0.1"
					speed="0.8"
					color="white"
				/>
			) : (
				<>
					{icon && (
						<img src={icon} alt={buttonData.label} className="size-sm" />
					)}

					{buttonData.label && (
						<p
							className={`text-bodyS font-medium ${
								buttonData.color === "bg-neutral-0"
									? "text-neutral-900"
									: "text-neutral-0"
							}`}
						>
							{buttonData.label}
						</p>
					)}
				</>
			)}
		</button>
	);
};

export default CustomButton;
