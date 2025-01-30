import { TabBar, TabBarProps } from 'react-native-tab-view'

import { Route } from '..'
import { colors } from '@/styles'

type RenderTabBarProps = TabBarProps<Route> & {}

const RenderTabBar = ({ ...props }: RenderTabBarProps): JSX.Element => {
	return (
		<TabBar
			activeColor={colors.gray[600]}
			inactiveColor={colors.gray[500]}
			style={{
				backgroundColor: colors.white
			}}
			indicatorStyle={{
				backgroundColor: colors.purple.base
			}}
			{...props}
		/>
	)
}

export { RenderTabBar }
