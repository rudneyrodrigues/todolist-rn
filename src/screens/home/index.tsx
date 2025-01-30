import { View } from 'react-native'
import { useFonts } from 'expo-font'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'
import { colors } from '@/styles'
import { Tabs, Header, NewTask } from '@/components/app'

SplashScreen.preventAutoHideAsync()

export function Home() {
	const [loader, error] = useFonts({
		Nunito_400Regular: require('@assets/fonts/Nunito-Regular.ttf'),
		Nunito_600SemiBold: require('@assets/fonts/Nunito-SemiBold.ttf'),
		Nunito_700Bold: require('@assets/fonts/Nunito-Bold.ttf')
	})

	useEffect(() => {
		if (loader || error) {
			SplashScreen.hideAsync()
		}
	}, [loader, error])

	if (!loader && !error) {
		return null
	}

	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }} edges={['top']}>
				<StatusBar style='auto' backgroundColor={colors.gray[100]} />

				<View style={styles.container}>
					<Header />

					<View style={styles.content}>
						<NewTask />

						<Tabs />
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
