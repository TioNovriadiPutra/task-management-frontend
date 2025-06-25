import type { Control } from "react-hook-form";
import type { InputType } from "types/formType";
import CustomTextInput from "./CustomTextInput";
import CustomDateInput from "./CustomDateInput";
import CustomDropdown from "./CustomDropdown";

type Props = {
	formData: InputType[];
	control: Control<any, any>;
};

const Form = ({ formData, control }: Props) => {
	return (
		<div className="gap-sm">
			{formData.map((item, index) => {
				if (item.type === "date")
					return (
						<CustomDateInput
							key={index.toString()}
							inputData={item}
							control={control}
						/>
					);

				if (item.type === "combo")
					return (
						<CustomDropdown
							key={index.toString()}
							inputData={item}
							control={control}
						/>
					);

				return (
					<CustomTextInput
						key={index.toString()}
						inputData={item}
						control={control}
					/>
				);
			})}
		</div>
	);
};

export default Form;
