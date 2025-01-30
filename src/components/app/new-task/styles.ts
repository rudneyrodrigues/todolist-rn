import { StyleSheet } from 'react-native'

import { colors } from '@/styles'

export const styles = StyleSheet.create({
	container: {
		gap: 8,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 20
	},
	input: {
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
	button: {
		width: 52,
		height: 52,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.purple.base
	},
	buttonIcon: {
		color: colors.white
	}
})
