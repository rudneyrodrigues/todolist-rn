import { FC, memo, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { colors } from '@/styles'
import { useTaskStore } from '@/lib/store/taskStore'

const NewTask: FC = memo((): JSX.Element => {
	const { add } = useTaskStore()
	const [text, setText] = useState('')

	const handleAdd = () => {
		if (!text.trim()) return

		add(text)
		setText('')
	}

	return (
		<View style={styles.container}>
			<TextInput
				value={text}
				style={styles.input}
				onChangeText={setText}
				placeholder='Adicione uma nova tarefa'
				placeholderTextColor={colors.gray[500]}
				onSubmitEditing={() => {
					handleAdd()
				}}
			/>

			<TouchableOpacity
				activeOpacity={0.9}
				style={styles.button}
				onPress={() => {
					handleAdd()
				}}
			>
				<Ionicons
					size={24}
					name='add-circle-outline'
					style={styles.buttonIcon}
				/>
			</TouchableOpacity>
		</View>
	)
})
NewTask.displayName = 'NewTask'

export { NewTask }
