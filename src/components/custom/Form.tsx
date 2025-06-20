import type { Control } from "react-hook-form";
import type { InputType } from "types/formType";
import CustomTextInput from "./CustomTextInput";

type Props = {
	formData: InputType[];
	control: Control<any, any>;
};

const Form = ({ formData, control }: Props) => {
	return (
		<div className="gap-sm">
			{formData.map((item, index) => (
				<CustomTextInput
					key={index.toString()}
					inputData={item}
					control={control}
				/>
			))}
		</div>
	);
};

export default Form;
