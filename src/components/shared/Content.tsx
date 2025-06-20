import { TableRow, TableSkeleton } from "@components/custom";
import type { ContentType, TableContentType } from "types/pageType";

type Props = {
	contentData: ContentType;
	fetchData: { finalData: TableContentType[]; isLoading: boolean };
};

const Content = ({ contentData, fetchData }: Props) => {
	return (
		<div className="flex-1 bg-neutral-0 rounded-lg border border-neutral-200">
			<div className="p-md gap-[6px]">
				<h1 className="text-h1 text-neutral-900">{contentData.header.title}</h1>

				<p className="text-bodyS font-normal text-neutral-500">
					{contentData.header.subTitle}
				</p>
			</div>

			<div className="flex-1 px-md pb-xxs drop-shadow-table">
				<div className="flex-1 border border-neutral-200 rounded-lg overflow-hidden">
					<div className="!flex-row p-xs border-b border-b-neutral-200">
						{contentData.tableHeader.map((item, index) => (
							<p
								key={index.toString()}
								className={`${item.flex} text-bodyXS font-medium text-neutral-500`}
							>
								{item.label}
							</p>
						))}

						<div className="flex-1" />
					</div>

					{fetchData.isLoading ? (
						<TableSkeleton />
					) : (
						<TableRow rowData={fetchData.finalData} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Content;
