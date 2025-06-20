export interface AddTaskInput {
	title: string;
	description: string;
}

export interface TaskDTO {
	id: number;
	title: string;
	description: string;
	status: boolean;
}
