import '@/root/global.css'
import { useOnboardingStore } from '@/store/onboardingStore'
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

  const hasCompletedOnboarding = useOnboardingStore(
    (state) => state.hasCompletedOnboarding
  )
  const isAuthenticated = false

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
        <Stack.Protected guard={!hasCompletedOnboarding && !isAuthenticated}>
          <Stack.Screen name='(onboarding)' />
        </Stack.Protected>
        <Stack.Protected guard={hasCompletedOnboarding && !isAuthenticated}>
          <Stack.Screen name='(auth)' />
        </Stack.Protected>
        <Stack.Protected guard={hasCompletedOnboarding && isAuthenticated}>
          <Stack.Screen name='(protected)' />
        </Stack.Protected>
        <Stack.Screen name='+not-found' />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return <InitialLayout />
}
