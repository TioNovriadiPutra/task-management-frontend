import { CloseButton } from "@components/shared";
import { useToast } from "@stores/pageStore";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

const Toast = () => {
	const { show, type, message, hideToast } = useToast();

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (show) {
			timeout = setTimeout(() => {
				hideToast();
			}, 4000);
		}

		return () => clearTimeout(timeout);
	}, [show]);

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className="absolute bottom-md right-md min-w-[360px] bg-neutral-0 !flex-row items-center px-md py-sm border border-neutral-200 rounded-md drop-shadow-toast gap-xxs"
					initial={{ opacity: 0, x: "100%" }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: "100%" }}
				>
					<div
						className={`size-[40px] rounded-full items-center justify-center ${
							type === "success" ? "bg-green-200" : "bg-red-100"
						}`}
					>
						<img
							src={type === "success" ? "success.svg" : "failed.svg"}
							alt="Toast Icon"
							className="size-sm"
						/>
					</div>

					<div className="flex-1 gap-[6px]">
						<p className="text-bodyXS font-semibold text-neutral-900">
							{message.split("|")[0]}
						</p>

						<p className="text-bodyXS font-normal text-neutral-900">
							{message.split("|")[1]}
						</p>
					</div>

					<CloseButton onClose={hideToast} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Toast;
