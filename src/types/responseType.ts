export type ResType<T = any> = {
	success: boolean;
	message: string;
	data: T;
};

export type ErrorResType<T = any> = ResType<T> & { code: number };
