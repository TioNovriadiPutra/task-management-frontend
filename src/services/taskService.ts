import type { AddTaskInput, TaskDTO } from "@interfaces/taskInterface";
import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { errorResponse } from "@utils/helper/responseHandler";
import type { ResType } from "types/responseType";

export const getTasks = async (): Promise<ResType<TaskDTO[]>> => {
	try {
		const response = await axiosInstance.get(API_ENDPOINT.getTasks);

		return response.data as ResType<TaskDTO[]>;
	} catch (error) {
		throw errorResponse(error);
	}
};

export const addTask = async (body: AddTaskInput): Promise<ResType> => {
	try {
		const response = await axiosInstance.post(API_ENDPOINT.getTasks, body);

		return response.data as ResType;
	} catch (error) {
		throw errorResponse(error);
	}
};

export const updateTaskStatus = async (id: number): Promise<ResType> => {
	try {
		const response = await axiosInstance.put(
			`${API_ENDPOINT.getTasks}/${id}`,
			{}
		);

		return response.data as ResType;
	} catch (error) {
		throw errorResponse(error);
	}
};

export const deleteTask = async (id: number): Promise<ResType> => {
	try {
		const response = await axiosInstance.delete(
			`${API_ENDPOINT.getTasks}/${id}`
		);

		return response.data as ResType;
	} catch (error) {
		throw errorResponse(error);
	}
};
