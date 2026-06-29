import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-2xl font-bold text-success">Welcome to Nativewind!</Text>
      <Link
        className="mt-4 p-4 rounded-md bg-primary text-white text-2xl font-bold"
        href="/onboarding"
      >
        Go to Onboarding Screen
      </Link>
      <Link
        className="mt-4 p-4 rounded-md bg-primary text-white text-2xl font-bold"
        href="/(auth)/sign-in"
      >
        Go to SignIn
      </Link>
      <Link
        className="mt-4 p-4 rounded-md bg-primary text-white text-2xl font-bold"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>
      <Link
        className="mt-4 p-4 rounded-md bg-primary text-white text-2xl font-bold"
        href="/subscriptions/spotify"
      >
        Spotify Subscription
      </Link>
      <Link
        className="mt-4 p-4 rounded-md bg-primary text-white text-2xl font-bold"
        href={{ pathname: '/subscriptions/[id]', params: { id: 'claude' } }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
