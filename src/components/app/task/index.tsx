import { FC, memo } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { TaskProps, useTaskStore } from '@/lib/store/taskStore'

const Task: FC<TaskProps> = memo(
	({ id, done, title }: TaskProps): JSX.Element => {
		const { update, remove } = useTaskStore()

		return (
			<View style={[styles.container, done && styles.containerCompleted]}>
				<TouchableOpacity
					activeOpacity={0.9}
					style={styles.checkButton}
					onPress={() => update(id, { done: !done })}
				>
					<Ionicons
						size={20}
						name={done ? 'checkmark-circle' : 'ellipse-outline'}
						style={[styles.checkIcon, done && styles.checkIconCompleted]}
					/>
				</TouchableOpacity>

				<Text style={[styles.title, done && styles.titleCompleted]}>
					{title}
				</Text>

				<TouchableOpacity
					style={styles.trashButton}
					activeOpacity={0.9}
					onPress={() => remove(id)}
				>
					<Ionicons size={20} name='trash-outline' style={styles.trashIcon} />
				</TouchableOpacity>
			</View>
		)
	}
)
Task.displayName = 'Task'

export { Task }
