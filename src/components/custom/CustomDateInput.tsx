import { AnimatePresence, motion } from "motion/react";
import { useController, type Control } from "react-hook-form";
import type { InputType } from "types/formType";

type Props = {
	inputData: InputType;
	control: Control<any, any>;
};

const CustomDateInput = ({ inputData, control }: Props) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name: inputData.name,
		control,
		rules: inputData.rules,
	});

	return (
		<div className="relative gap-[8px]">
			<p className="text-bodyS font-medium text-neutral-900">
				{inputData.label}
				{inputData.required && <span className="text-red-600"> *</span>}
			</p>

			<div
				className={`relative !border ${
					error ? "border-red-600" : "border-neutral-200"
				} rounded-md px-[12px] py-[8px] ${
					inputData.type === "textarea" && "h-[200px]"
				}`}
			>
				<input {...field} type="date" placeholder={inputData.placeholder} />

				<AnimatePresence>
					{error && (
						<motion.p
							className="absolute bottom-[-11px] text-bodyS font-normal bg-neutral-0 text-red-600"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.5 }}
						>
							{error.message}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default CustomDateInput;
