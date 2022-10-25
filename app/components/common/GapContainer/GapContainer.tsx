import React, {FC, PropsWithChildren, useMemo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {GapContainerProvider, useGapContainer} from './GapContainerContext';

export interface GapContainerProps {
  style?: StyleProp<ViewStyle>;
  direction: 'row' | 'column';
  gap: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
}

export interface GapContainerItemProps {
  style?: StyleProp<ViewStyle>;
}

export const GapContainer: FC<PropsWithChildren<GapContainerProps>> & {
  Item: typeof GapContainerItem;
} = props => {
  const {children, style, direction, gap, alignItems, justifyContent} = props;

  const gapStyles = {
    display: 'flex',
    flexDirection: direction,
    marginHorizontal: direction === 'row' ? -gap / 2 : undefined,
    marginVertical: direction === 'column' ? -gap / 2 : undefined,
    alignItems,
    justifyContent,
  } as StyleProp<ViewStyle>;

  const value = useMemo(() => {
    return {
      direction,
      gap,
    };
  }, [direction, gap]);

  return (
    <View style={[gapStyles, style]}>
      <GapContainerProvider value={value}>{children}</GapContainerProvider>
    </View>
  );
};

const GapContainerItem: FC<
  PropsWithChildren<GapContainerItemProps>
> = props => {
  const {children, style} = props;
  const {direction, gap} = useGapContainer();

  const gapStyles = {
    paddingHorizontal: direction === 'row' ? gap / 2 : undefined,
    paddingVertical: direction === 'column' ? gap / 2 : undefined,
  } as StyleProp<ViewStyle>;

  return <View style={[gapStyles, style]}>{children}</View>;
};

GapContainer.Item = GapContainerItem;
