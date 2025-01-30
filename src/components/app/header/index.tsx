import { FC, memo } from 'react'
import { View } from 'react-native'

import { Logo } from '../logo'
import { styles } from './styles'

const Header: FC = memo((): JSX.Element => {
	return (
		<View style={styles.container}>
			<Logo />
		</View>
	)
})
Header.displayName = 'Header'

export { Header }
