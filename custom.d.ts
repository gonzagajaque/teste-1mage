/* eslint-disable import/no-duplicates */
declare module 'react-native-gesture-bottom-sheet';
declare module 'react-native-animated-input';
declare module '*.svg' {
  import React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export = value;
}
declare module '*.jpg' {
  import { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export = value;
}
