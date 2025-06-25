import type { DropdownType } from "types/formType";

export interface AddTaskInput {
	title: string;
	startDate?: string;
	endDate?: string;
	description: string;
	pic: DropdownType | null;
}

export interface TaskDTO {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	description: string;
	pic: string;
	status: boolean;
}
