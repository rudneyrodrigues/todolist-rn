import { StyleSheet } from 'react-native'

import { colors, fonts } from '@/styles'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	emptyContainer: {
		flex: 1,
		paddingTop: 40,
		alignItems: 'center'
	},
	emptyIcon: {
		marginBottom: 20,
		color: colors.purple.light
	},
	emptyTitle: {
		fontSize: 14,
		fontFamily: fonts.bold
	},
	emptySubtitle: {
		fontSize: 14,
		fontFamily: fonts.regular
	},
	tasksContainer: {
		gap: 12,
		padding: 20,
		width: '100%'
	}
})
