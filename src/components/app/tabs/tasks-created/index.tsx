import { FC, memo } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ScrollView, Text, View } from 'react-native'

import { Task } from '../../task'
import { styles } from './styles'
import { useTaskStore } from '@/lib/store/taskStore'

const TasksCreatedTab: FC = memo((): JSX.Element => {
	const { tasks } = useTaskStore()

	const taskIncomplete = tasks.filter(task => !task.done)

	// Organize as tarefas colocando as completas no final
	const tasksSorted = taskIncomplete.sort((a, b) => {
		if (a.done && !b.done) return 1
		if (!a.done && b.done) return -1
		return 0
	})

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={styles.container}>
				{!taskIncomplete.length && (
					<View style={styles.emptyContainer}>
						<Ionicons
							size={40}
							name='clipboard-outline'
							style={styles.emptyIcon}
						/>
						<Text style={styles.emptyTitle}>
							Você ainda não tem tarefas cadastradas
						</Text>
						<Text style={styles.emptySubtitle}>
							Crie tarefas e organize seus itens a fazer
						</Text>
					</View>
				)}

				<View style={styles.tasksContainer}>
					{tasksSorted.map((task, index) => (
						<Task key={index} {...task} />
					))}
				</View>
			</View>
		</ScrollView>
	)
})
TasksCreatedTab.displayName = 'TasksCreatedTab'

export { TasksCreatedTab }
