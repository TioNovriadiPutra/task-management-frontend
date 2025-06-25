import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useController, type Control } from "react-hook-form";
import type { DropdownType, InputType } from "types/formType";

type Props = {
	inputData: InputType;
	control: Control<any, any>;
};

const CustomDropdown = ({ inputData, control }: Props) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const {
		field,
		fieldState: { error },
	} = useController({
		name: inputData.name,
		control,
		rules: inputData.rules,
	});

	const onHandleDropdown = () => setShowDropdown(!showDropdown);

	const onHandlePick = (item: DropdownType) => {
		field.onChange(item);
		setShowDropdown(false);
	};

	return (
		<div className="relative gap-[8px]">
			<p className="text-bodyS font-medium text-neutral-900">
				{inputData.label}
				{inputData.required && <span className="text-red-600"> *</span>}
			</p>

			<button
				type="button"
				className={`relative !border ${
					error ? "border-red-600" : "border-neutral-200"
				} rounded-md px-[12px] py-[8px] ${
					inputData.type === "textarea" && "h-[200px]"
				} !justify-start`}
				onClick={(e) => {
					e.preventDefault();
					onHandleDropdown();
				}}
			>
				<p
					className={`flex-1 text-left text-bodyS font-normal ${
						field.value ? "text-neutral-900" : "text-neutral-500"
					}`}
				>
					{field.value ? field.value.label : inputData.placeholder}
				</p>

				<img src="dropdown.svg" alt="Dropdown Icon" className="size-md" />

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

				<AnimatePresence>
					{showDropdown && (
						<motion.div
							className="absolute bg-neutral-0 left-2 right-2 bottom-[120%] shadow-md border border-neutral-200 rounded-md p-[5px]"
							initial={{ opacity: 0, scale: 0.5, y: "50%" }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.5, y: "50%" }}
						>
							{inputData.items!.map((item, index) => (
								<button
									key={index.toString()}
									type="button"
									className={`!justify-start px-xxs py-[8px] ${
										field.value && field.value.value === item.value
											? "bg-neutral-100"
											: "bg-neutral-0"
									} hover:bg-neutral-200 transition-colors duration-300 rounded-md`}
									onClick={(e) => {
										e.preventDefault();
										onHandlePick(item);
									}}
								>
									<p className="text-bodyS font-normal text-neutral-900">
										{item.label}
									</p>
								</button>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</button>
		</div>
	);
};

export default CustomDropdown;
