import { create } from 'zustand'

export type TaskProps = {
	id: number
	title: string
	done: boolean
}

type StateProps = {
	tasks: TaskProps[]
	add: (title: string) => void
	remove: (id: number) => void
	update: (id: number, { done }: { done: boolean }) => void
}

export const useTaskStore = create<StateProps>(set => ({
	tasks: [],
	add: (title: string) => {
		set(state => ({
			tasks: [
				...state.tasks,
				{
					id: state.tasks.length + 1,
					title,
					done: false
				}
			]
		}))
	},
	update: (id: number, { done }) => {
		set(state => ({
			tasks: state.tasks.map(task =>
				task.id === id ? { ...task, done } : task
			)
		}))
	},
	remove: (id: number) => {
		set(state => ({
			tasks: state.tasks.filter(task => task.id !== id)
		}))
	}
}))
