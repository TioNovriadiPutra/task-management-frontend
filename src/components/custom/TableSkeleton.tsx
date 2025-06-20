import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableSkeleton = () => {
	return (
		<div className="grow-1 basis-0 overflow-y-auto gap-1">
			<Skeleton count={50} height={64} className="m-0 p-0" />
		</div>
	);
};

export default TableSkeleton;
