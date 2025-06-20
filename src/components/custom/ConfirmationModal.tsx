import { ModalFooter, ModalHeader } from "@components/shared";
import ModalContainer from "@containers/ModalContainer";
import { useConfirmationModal } from "@stores/modalStore";
import { AnimatePresence, motion } from "motion/react";

const ConfirmationModal = () => {
	const confirmationModal = useConfirmationModal();

	return (
		<AnimatePresence>
			{confirmationModal.show && (
				<ModalContainer>
					<motion.div
						className="w-[395px] bg-neutral-0 rounded-lg"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
					>
						<ModalHeader
							title={confirmationModal.data!.title}
							onClose={confirmationModal.hideModal}
						/>

						<div className="px-md py-sm">
							<p className="text-bodyS font-normal text-neutral-500">
								{confirmationModal.data!.subTitle}
							</p>
						</div>

						<ModalFooter
							buttonData={confirmationModal.data!.button}
							onClose={confirmationModal.hideModal}
							onConfirm={confirmationModal.data?.onConfirm}
						/>
					</motion.div>
				</ModalContainer>
			)}
		</AnimatePresence>
	);
};

export default ConfirmationModal;
