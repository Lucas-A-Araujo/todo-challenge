import { useRef, useState } from 'react'
import { FlatList, Text, View, TextInput } from 'react-native'
import { Empty } from '../../components/Empty'
import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import { TaskType } from '../../types/TaskType'
import { styles } from './styles'

export function HomeScreen() {
	const [tasks, setTasks] = useState<TaskType[]>([])
	const [newTask, setNewTask] = useState('')
	const newTaskInputRef = useRef<TextInput>(null)

	function handleTaskAdd() {
		if (newTask !== '') {
			setTasks((tasks) => [
				...tasks,
				{ id: (tasks.length+1).toString(), isCompleted: false, title: newTask.trim() },
			])

			setNewTask('')

			newTaskInputRef.current?.blur()
		}
	}

	function handleTaskDone(id: string) {
		setTasks((task) =>
			task.map((task) => {
				task.id === id ? (task.isCompleted = !task.isCompleted) : null
				return task
			}),
		)
	}

	function handleTaskDeleted(id: string) {
        setTasks((tasks) => tasks.filter((task) => task.id !== id))
	}

	const totalTasksCreated = tasks.length
	const totalTasksCompleted = tasks.filter(
		({ isCompleted }) => isCompleted,
	).length

	return (
		<View style={styles.container}>
			<Header
				inputRef={newTaskInputRef}
				task={newTask}
				onChangeText={setNewTask}
				onPress={handleTaskAdd}
			/>
			<View style={styles.tasksContainer}>
				<View style={styles.info}>
					<View style={styles.row}>
						<Text style={styles.tasksCreated}>Criadas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>
								{totalTasksCreated}
							</Text>
						</View>
					</View>
					<View style={styles.row}>
						<Text style={styles.tasksDone}>Concluídas</Text>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>
								{totalTasksCompleted}
							</Text>
						</View>
					</View>
				</View>

				<FlatList
					data={tasks}
					keyExtractor={(tasks) => tasks.id}
					renderItem={({ item }) => (
						<Task
							key={item.id}
							onTaskDone={() => handleTaskDone(item.id)}
							onTaskDeleted={() => handleTaskDeleted(item.id)}
							{...item}
						/>
					)}
					ListEmptyComponent={<Empty />}
				/>
			</View>
		</View>
	)
}