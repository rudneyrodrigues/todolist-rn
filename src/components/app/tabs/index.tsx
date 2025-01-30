import { FC, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'

import { styles } from './styles'
import { RenderTabBar } from './tab-bar'
import { TasksCreatedTab } from './tasks-created'
import { useTaskStore } from '@/lib/store/taskStore'
import { TasksCompletedTab } from './tasks-completed'

export type Route = {
	key: string
	title: string
}

const renderScene = SceneMap({
	created: TasksCreatedTab,
	completed: TasksCompletedTab
})

const Tabs: FC = (): JSX.Element => {
	const { tasks } = useTaskStore()
	const layout = useWindowDimensions()
	const [index, setIndex] = useState(0)

	const taskCompleted = tasks.filter(task => task.done)
	const taskIncomplete = tasks.filter(task => !task.done)

	const routes: Route[] = [
		{ key: 'created', title: `Tarefas criadas ${taskIncomplete.length}` },
		{ key: 'completed', title: `Tarefas concluídas ${taskCompleted.length}` }
	]

	return (
		<TabView
			onIndexChange={setIndex}
			style={styles.container}
			renderScene={renderScene}
			renderTabBar={RenderTabBar}
			navigationState={{ index, routes }}
			initialLayout={{ width: layout.width, height: layout.height }}
		/>
	)
}
Tabs.displayName = 'Tabs'

export { Tabs }
