import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.css";
import App from "@views/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/config/client";
import { ConfirmationModal, FormModal, Toast } from "@components/custom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<FormModal />
			<ConfirmationModal />
			<Toast />
		</QueryClientProvider>
	</StrictMode>
);
