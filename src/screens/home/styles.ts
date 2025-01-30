import { StyleSheet } from 'react-native'

import { colors } from '@/styles'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: colors.white
	},
	header: {
		height: 160,
		width: '100%',
		paddingTop: 50,
		alignItems: 'center',
		backgroundColor: colors.gray[100]
	},
	content: {
		marginTop: -32,
		paddingHorizontal: 20
	},
	newTaskContainer: {
		gap: 8,
		width: '100%',
		marginBottom: 20,
		alignItems: 'center',
		flexDirection: 'row'
	},
	newTaskInput: {
		flex: 1,
		height: 52,
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		color: colors.gray[600],
		borderColor: colors.gray[200],
		backgroundColor: colors.white
	},
	newTaskButton: {
		width: 52,
		height: 52,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple.base
	},
	newTaskButtonIcon: {
		color: colors.white
	}
})
