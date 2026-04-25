import { OnboardingImages } from '@/constants/images'
import { onboardingSlidesType } from '@/types/onboarding/onboarding-types'
import { Image } from 'expo-image'

export const onboardingSlides: onboardingSlidesType[] = [
  {
    // color: '#1A1773',
    title: 'Explore',
    image: (
      <Image
        source={OnboardingImages.OnboardingOne}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentFit='contain'
      />
    ),
    secondTitle: 'Our Community',
    subTitle:
      'Join our community to get the latest news and updates about our courses',
  },
  {
    // color: '#1E5CD9',
    title: 'Set Your',
    image: (
      <Image
        source={OnboardingImages.OnboardingTwo}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentFit='contain'
      />
    ),
    secondTitle: 'Own Goal',
    subTitle:
      'Personalize your study plan with flexible timelines that suit you best.',
  },
  {
    // color: '#4384D9',
    image: (
      <Image
        source={OnboardingImages.OnboardingThree}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentFit='contain'
      />
    ),
    title: 'Complete full',
    secondTitle: 'Course',
    subTitle:
      'Achieve certification by completing courses with consistent dedication.',
  },
  {
    // color: '#04BF9D',
    image: (
      <Image
        source={OnboardingImages.OnboardingFour}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentFit='contain'
      />
    ),
    title: 'Get Started',
    secondTitle: 'Now',
    subTitle:
      'Start your journey to success with expert guidance and clear milestones.',
  },
]
