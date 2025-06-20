import { ModalHeader, ModalFooter } from "@components/shared";
import ModalContainer from "@containers/ModalContainer";
import { useFormModal } from "@stores/modalStore";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import Form from "./Form";

const FormModal = () => {
	const formModal = useFormModal();

	const { control, handleSubmit, reset } = useForm({
		defaultValues: formModal.data?.defaultValues ?? {},
	});

	return (
		<AnimatePresence>
			{formModal.show && (
				<ModalContainer>
					<motion.form
						onSubmit={handleSubmit((data) => {
							if (formModal.data && formModal.data.onSubmit)
								formModal.data.onSubmit({ body: data, reset });
						})}
						className="w-[395px] bg-neutral-0 rounded-lg"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
					>
						<ModalHeader
							title={formModal.data!.title}
							onClose={() => {
								formModal.hideModal();
								reset();
							}}
						/>

						<div className="py-sm px-[36px]">
							<Form formData={formModal.data?.inputs ?? []} control={control} />
						</div>

						<ModalFooter
							buttonData={{
								label: "Tambah",
								color: "bg-primary-900",
								hover: "bg-primary-700",
							}}
							onClose={() => {
								formModal.hideModal();
								reset();
							}}
						/>
					</motion.form>
				</ModalContainer>
			)}
		</AnimatePresence>
	);
};

export default FormModal;
