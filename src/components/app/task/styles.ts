import { StyleSheet } from 'react-native'

import { colors, fonts } from '@/styles'

export const styles = StyleSheet.create({
	container: {
		gap: 8,
		padding: 12,
		width: '100%',
		borderWidth: 1,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: colors.gray[300],
		justifyContent: 'space-between',
		backgroundColor: colors.gray[200]
	},
	containerCompleted: {
		backgroundColor: colors.white
	},
	checkButton: {
		padding: 4
	},
	checkIcon: {
		color: colors.purple.base
	},
	checkIconCompleted: {
		color: colors.green.base
	},
	title: {
		flex: 1,
		fontSize: 16,
		fontFamily: fonts.regular
	},
	titleCompleted: {
		textDecorationLine: 'line-through',
		color: colors.gray[600]
	},
	trashButton: {
		padding: 4
	},
	trashIcon: {
		color: colors.gray[600]
	}
})
