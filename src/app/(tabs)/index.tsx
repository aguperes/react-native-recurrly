import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link className="mt-4 font-sans-bold p-4 rounded bg-primary text-white" href="/onboarding">
        Go to Onboarding Screen
      </Link>
      <Link
        className="mt-4 font-sans-bold p-4 rounded bg-primary text-white"
        href="/(auth)/sign-in"
      >
        Go to SignIn
      </Link>
      <Link
        className="mt-4 font-sans-bold p-4 rounded bg-primary text-white"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
