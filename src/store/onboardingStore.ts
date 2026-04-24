import { zustandStorage } from '@/store/mmkv'
import { OnboardingState } from '@/types/onboarding/onboarding-types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useOnboardingStore = create(
  persist<OnboardingState>(
    (set) => ({
      hasCompletedOnboarding: false,
      completeOnboarding: (hasCompletedOnboarding: boolean) =>
        set((state) => {
          return {
            ...state,
            hasCompletedOnboarding,
          }
        }),
    }),
    {
      name: 'onboarding-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
)
