import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const InitialLayout = () => {
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
