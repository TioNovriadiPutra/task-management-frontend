import useTaskModel from "@models/taskModel";
import { useConfirmationModal } from "@stores/modalStore";
import dayjs from "dayjs";
import type { UseFormReset } from "react-hook-form";
import type { TableContentType } from "types/pageType";

const useTaskController = () => {
	const showConfirmationModal = useConfirmationModal(
		(state) => state.showModal
	);

	const { useGetTasks, useAddTask, useUpdateTaskStatus, useDeleteTask } =
		useTaskModel();

	const addTaskMutation = useAddTask();
	const updateTaskStatusMutation = useUpdateTaskStatus();
	const deleteTaskMutation = useDeleteTask();

	const useGetTasksService = () => {
		const { data, isLoading } = useGetTasks();

		let finalData: TableContentType[] = [];

		if (!isLoading && data)
			finalData = data.data.map(
				(item) =>
					({
						content: [
							{ label: item.title, flex: "flex-2", type: "text" },
							{ label: item.description, flex: "flex-2", type: "text" },
							{
								label: dayjs(item.startDate, "YYYY-MM-DD").format(
									"DD MMM YYYY"
								),
								flex: "flex-1",
								type: "text",
							},
							{
								label: dayjs(item.endDate, "YYYY-MM-DD").format("DD MMM YYYY"),
								flex: "flex-1",
								type: "text",
							},
							{
								label: item.pic,
								flex: "flex-1",
								type: "text",
							},
							{
								label: item.status ? "Selesai" : "Berlangsung",
								flex: "flex-1",
								type: "status",
							},
						],
						func: [
							{
								icon: "edit.svg",
								onClick: () =>
									showConfirmationModal({
										title: "Edit Status Task",
										subTitle: "Apakah anda sudah menyelesaikan task ini?",
										onConfirm: () => updateTaskStatusMutation.mutate(item.id),
										button: {
											label: "Selesai",
											color: "bg-primary-900",
											hover: "bg-primary-700",
										},
									}),
								disabled: item.status,
							},
							{
								icon: "delete.svg",
								onClick: () =>
									showConfirmationModal({
										title: "Hapus Task",
										subTitle: "Anda yakin ingin menghapus task ini?",
										onConfirm: () => deleteTaskMutation.mutate(item.id),
										button: {
											label: "Hapus",
											color: "bg-red-400",
											hover: "bg-red-300",
										},
									}),
							},
						],
					} as TableContentType)
			);

		return {
			finalData,
			isLoading,
		};
	};

	return {
		useGetTasksService,
		addTaskService: (data: { body: any; reset: UseFormReset<any> }) =>
			addTaskMutation.mutate(data),
	};
};

export default useTaskController;
