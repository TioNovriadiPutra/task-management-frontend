import { Header } from "@components/custom";
import { Content } from "@components/shared";
import Container from "@containers/Container";
import useTaskController from "@controllers/taskController";
import { addTaskForm } from "@utils/constant/formConst";
import { homeData } from "@utils/constant/pageConst";

const App = () => {
	const { useGetTasksService, addTaskService } = useTaskController();

	const taskData = useGetTasksService();

	return (
		<Container>
			<Header
				formData={{
					...addTaskForm,
					onSubmit: addTaskService,
				}}
				fetchData={taskData}
			/>

			<Content contentData={homeData} fetchData={taskData} />
		</Container>
	);
};

export default App;
