import type { AxiosError } from "axios";
import type { ErrorResType, ResType } from "types/responseType";

export const errorResponse = (error: any): ErrorResType => {
	const axiosError = error as AxiosError;

	const data = axiosError.response!.data as ResType;

	return {
		code: axiosError.status!,
		...data,
	} as ErrorResType;
};
