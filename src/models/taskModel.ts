import useHelper from "@hooks/useHelper";
import type { AddTaskInput } from "@interfaces/taskInterface";
import {
	addTask,
	deleteTask,
	getTasks,
	updateTaskStatus,
} from "@services/taskService";
import { useConfirmationModal, useFormModal } from "@stores/modalStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@utils/config/client";
import type { UseFormReset } from "react-hook-form";

const useTaskModel = () => {
	const hideFormModal = useFormModal((state) => state.hideModal);
	const hideConfirmationModal = useConfirmationModal(
		(state) => state.hideModal
	);

	const { onMutate, onError, onSuccess, onSettled } = useHelper();

	const useGetTasks = () =>
		useQuery({
			queryKey: ["getTasks"],
			queryFn: () => getTasks(),
		});

	const useAddTask = () =>
		useMutation({
			mutationKey: ["addTask"],
			mutationFn: (data: { body: AddTaskInput; reset: UseFormReset<any> }) =>
				addTask(data.body),
			onMutate: () => onMutate("button"),
			onError: (error) => onError(error.message),
			onSuccess: (response, variables) => {
				variables.reset();
				hideFormModal();
				queryClient.invalidateQueries({ queryKey: ["getTasks"] });
				onSuccess(response.message);
			},
			onSettled: () => onSettled("button"),
		});

	const useUpdateTaskStatus = () =>
		useMutation({
			mutationKey: ["updateTaskStatus"],
			mutationFn: (id: number) => updateTaskStatus(id),
			onMutate: () => onMutate("button"),
			onError: (error) => onError(error.message),
			onSuccess: (response) => {
				hideConfirmationModal();
				queryClient.invalidateQueries({ queryKey: ["getTasks"] });
				onSuccess(response.message);
			},
			onSettled: () => onSettled("button"),
		});

	const useDeleteTask = () =>
		useMutation({
			mutationKey: ["deleteTask"],
			mutationFn: (id: number) => deleteTask(id),
			onMutate: () => onMutate("button"),
			onError: (error) => onError(error.message),
			onSuccess: (response) => {
				hideConfirmationModal();
				queryClient.invalidateQueries({ queryKey: ["getTasks"] });
				onSuccess(response.message);
			},
			onSettled: () => onSettled("button"),
		});

	return {
		useGetTasks,
		useAddTask,
		useUpdateTaskStatus,
		useDeleteTask,
	};
};

export default useTaskModel;
