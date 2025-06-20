import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { homeData } from "@utils/constant/pageConst";
import type { TableContentType } from "types/pageType";

type Props = {
	data: TableContentType[];
	subTitle: string;
};

const TaskReport = ({ data, subTitle }: Props) => {
	return (
		<Document>
			<Page size="A4">
				<View style={styles.container}>
					<View style={styles.mainHeader}>
						<Text style={styles.title}>{homeData.header.title}</Text>

						<Text>{subTitle}</Text>
					</View>

					<View style={styles.box}>
						<View style={styles.header}>
							{homeData.tableHeader.map((item, index) => (
								<Text key={index.toString()} style={styles.label}>
									{item.label}
								</Text>
							))}
						</View>

						{data.map((item, index) => (
							<View key={index.toString()} style={styles.row}>
								{item.content.map((item2, index2) => (
									<Text key={index2.toString()} style={styles.rowLabel}>
										{item2.label}
									</Text>
								))}
							</View>
						))}
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default TaskReport;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		paddingVertical: 14,
		gap: 24,
	},
	mainHeader: {
		gap: 4,
	},
	title: {
		fontSize: 24,
		fontWeight: 600,
		color: "#171717",
	},
	subTitle: {
		fontSize: 14,
		fontWeight: 400,
		color: "#737373",
	},
	box: {
		borderWidth: 1,
		borderColor: "#e5e5e5",
		borderRadius: 8,
	},
	header: {
		display: "flex",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#e5e5e5",
		padding: 16,
	},
	label: {
		flex: 1,
		fontSize: 12,
		fontWeight: 500,
		color: "#737373",
	},
	row: {
		flexDirection: "row",
		padding: 16,
	},
	rowLabel: {
		flex: 1,
		fontSize: 14,
		fontWeight: 400,
		color: "#171717",
	},
});
