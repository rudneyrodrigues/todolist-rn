import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type TaskProps = {
	id: number
	title: string
	done: boolean
}

type StateProps = {
	tasks: TaskProps[]
	add: (title: string) => void
	remove: (id: number) => void
	loadTasks: () => Promise<void>
	update: (id: number, { done }: { done: boolean }) => void
}

export const useTaskStore = create<StateProps>(set => ({
	tasks: [],

	add: (title: string) => {
		set(state => {
			const tasks = [
				...state.tasks,
				{
					id: state.tasks.length + 1,
					title,
					done: false
				}
			]

			AsyncStorage.setItem('tasks', JSON.stringify(tasks))

			return { tasks }
		})
	},
	update: (id: number, { done }) => {
		set(state => {
			const tasks = state.tasks.map(task =>
				task.id === id ? { ...task, done } : task
			)

			AsyncStorage.setItem('tasks', JSON.stringify(tasks))

			return { tasks }
		})
	},
	remove: (id: number) => {
		set(state => {
			const tasks = state.tasks.filter(task => task.id !== id)

			AsyncStorage.setItem('tasks', JSON.stringify(tasks))

			return { tasks }
		})
	},
	loadTasks: async () => {
		try {
			const storedTasks = await AsyncStorage.getItem('tasks')

			if (storedTasks) {
				set({ tasks: JSON.parse(storedTasks) })
			}
		} catch (error) {
			console.error(error)
		}
	}
}))
