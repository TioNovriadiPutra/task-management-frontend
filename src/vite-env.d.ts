/// <reference types="vite/client" />
import "@tanstack/react-query";
import type { ErrorResType } from "types/responseType";

declare module "@tanstack/react-query" {
	interface Register {
		defaultError: ErrorResType;
	}
}
