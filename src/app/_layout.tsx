import '@/root/global.css'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    'sans-regular': require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-medium': require('@/assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-bold': require('@/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-semibold': require('@/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-extrabold': require('@/assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('@/assets/fonts/PlusJakartaSans-Light.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      <StatusBar style='auto' />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(auth)' />
        <Stack.Screen name='(onboarding)' />
        <Stack.Screen name='(protected)' />
        <Stack.Screen name='+not-found' />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return <InitialLayout />
}
