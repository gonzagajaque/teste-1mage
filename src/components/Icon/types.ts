import { ViewStyle, StyleProp } from 'react-native';

import svgs from './svgs';

export type SVGProps = {
  name?: keyof typeof svgs | string;
  size?: number;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
};
