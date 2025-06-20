import { CustomButton } from "@components/shared";
import type { TableContentType } from "types/pageType";

type Props = {
	rowData: TableContentType[];
};

const TableRow = ({ rowData }: Props) => {
	return (
		<div className="grow-1 basis-0 overflow-y-auto">
			{rowData.map((item1, index1) => (
				<div
					key={index1.toString()}
					className="!flex-row items-center p-xs border-b border-b-neutral-200"
				>
					{item1.content.map((item2, index2) => (
						<div
							key={index2.toString()}
							className={`!flex-row items-center gap-[8px] ${item2.flex}`}
						>
							{item2.type === "status" && (
								<img
									src={
										item2.label === "Berlangsung" ? "onprog.svg" : "done.svg"
									}
									alt="Status Icon"
									className="size-sm"
								/>
							)}

							<p className="text-bodyS font-normal text-neutral-900">
								{item2.label}
							</p>
						</div>
					))}

					<div className="flex-1 !flex-row gap-xxs justify-center">
						{item1.func.map((item3, index3) => (
							<CustomButton
								key={index3.toString()}
								buttonData={{
									color: "bg-neutral-0",
									hover: "bg-neutral-200",
								}}
								icon={item3.icon}
								disabled={item3.disabled}
								onClick={item3.onClick}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TableRow;
