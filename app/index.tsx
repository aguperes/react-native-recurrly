import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}
