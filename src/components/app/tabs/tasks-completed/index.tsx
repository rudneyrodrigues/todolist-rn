import { FC, memo } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ScrollView, Text, View } from 'react-native'

import { Task } from '../../task'
import { styles } from './styles'
import { useTaskStore } from '@/lib/store/taskStore'

const TasksCompletedTab: FC = memo((): JSX.Element => {
	const { tasks } = useTaskStore()

	const taskCompleted = tasks.filter(task => task.done)

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				{!taskCompleted.length && (
					<View style={styles.emptyContainer}>
						<Ionicons
							size={40}
							name='checkmark-circle-outline'
							style={styles.emptyIcon}
						/>
						<Text style={styles.emptyTitle}>
							Você ainda não tem tarefas concluídas
						</Text>
						<Text style={styles.emptySubtitle}>
							Complete tarefas e organize seus itens a fazer
						</Text>
					</View>
				)}

				<View style={styles.tasksContainer}>
					{taskCompleted.map((task, index) => (
						<Task key={index} {...task} />
					))}
				</View>
			</View>
		</ScrollView>
	)
})
TasksCompletedTab.displayName = 'TasksCompletedTab'

export { TasksCompletedTab }
