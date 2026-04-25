import { useOnboardingStore } from '@/store/onboardingStore'
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export const SkipBtn = () => {
  const { completeOnboarding } = useOnboardingStore()

  return (
    <View className='self-end'>
      <Pressable
        onPress={() => completeOnboarding(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 2,
          paddingHorizontal: 8,
          borderRadius: 999,
        }}
      >
        <Text className='will-change-auto text-secondary-turquoise text-lg font-semibold'>
          Skip
        </Text>
        <MaterialIcons name='navigate-next' size={20} color='#04bf9d' />
      </Pressable>
    </View>
  )
}
