import { useFonts } from 'expo-font'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'

import { styles } from './styles'
import { colors } from '@/styles'
import { Logo } from '@/components/app'

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
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style='auto' backgroundColor={colors.gray[100]} />

			<View style={styles.container}>
				<View style={styles.header}>
					<Logo />
				</View>

				<View style={styles.content}>
					<View style={styles.newTaskContainer}>
						<TextInput
							style={styles.newTaskInput}
							placeholder='Adicione uma nova tarefa'
							placeholderTextColor={colors.gray[500]}
						/>
						<TouchableOpacity activeOpacity={0.9} style={styles.newTaskButton}>
							<Ionicons
								size={24}
								name='add-circle-outline'
								style={styles.newTaskButtonIcon}
							/>
						</TouchableOpacity>
					</View>

					<Text>Todo List com React Native e TypeScript</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}
