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
	content: {
		flex: 1,
		width: '100%',
		marginTop: -32
	}
})
