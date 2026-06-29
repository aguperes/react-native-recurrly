// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
import { Image, View } from 'react-native';

export default function TabIcon({ focused, icon }: TabIconProps) {
  return (
    <View className="size-12 items-center justify-center">
      <View
        className={clsx(
          'size-12 items-center justify-center rounded-full',
          focused ? 'bg-accent' : 'bg-transparent',
        )}
      >
        <Image source={icon} className="size-6" contentFit="contain" />
      </View>
    </View>
  );
}
