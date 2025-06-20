import { useForm } from "react-hook-form";

const CustomSearchInput = () => {
	const { register } = useForm({
		defaultValues: {
			search: "",
		},
	});

	return (
		<div className="!flex-row px-[12px] py-[7px] border border-neutral-200 rounded-md gap-[8px] w-[320px]">
			<img src="search.svg" alt="Search Icon" className="size-sm" />

			<input {...register("search")} placeholder="Search..." />
		</div>
	);
};

export default CustomSearchInput;
