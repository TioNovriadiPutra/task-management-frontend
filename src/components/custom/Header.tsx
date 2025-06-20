import CustomButton from "@components/shared/CustomButton";
import CustomSearchInput from "./CustomSearchInput";
import { useFormModal } from "@stores/modalStore";
import type { FormType } from "types/formType";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TaskReport from "./TaskReport";
import type { TableContentType } from "types/pageType";

type Props = {
	formData: FormType<any>;
	fetchData: { finalData: TableContentType[]; isLoading: boolean };
};

const Header = ({ formData, fetchData }: Props) => {
	const showFormModal = useFormModal((state) => state.showModal);

	return (
		<div className="!flex-row items-center justify-between">
			<CustomSearchInput />

			<div className="!flex-row gap-sm">
				{!fetchData.isLoading && (
					<PDFDownloadLink
						document={
							<TaskReport
								data={fetchData.finalData}
								subTitle="Report data task"
							/>
						}
					>
						{({ loading }) => (
							<CustomButton
								buttonData={{
									label: "Export",
									color: "bg-primary-900",
									hover: "bg-neutral-50",
								}}
								icon="export.svg"
								isLoading={loading}
							/>
						)}
					</PDFDownloadLink>
				)}

				<CustomButton
					buttonData={{
						label: "Tambah",
						color: "bg-primary-900",
						hover: "bg-primary-700",
					}}
					icon="add.svg"
					onClick={() => showFormModal(formData)}
				/>
			</div>
		</div>
	);
};

export default Header;
