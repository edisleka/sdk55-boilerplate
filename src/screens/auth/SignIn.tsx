import { useOnboardingStore } from '@/store/onboardingStore'
import { Pressable, Text, View } from 'react-native'

export default function SignIn() {
  const { completeOnboarding } = useOnboardingStore()

  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Sign In</Text>
      {__DEV__ && (
        <Pressable
          onPress={() => completeOnboarding(false)}
          style={{
            backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 2,
            paddingHorizontal: 8,
            borderRadius: 999,
          }}
        >
          <Text className='will-change-auto text-white text-lg font-semibold'>
            Reset Onboarding
          </Text>
        </Pressable>
      )}
    </View>
  )
}
