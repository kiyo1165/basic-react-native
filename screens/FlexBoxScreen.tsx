import { View, Text } from 'react-native';
import React, { VFC, useEffect } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: VFC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted Flex box');
    return () => {
      console.log('un mounted Flex-box');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>FlexBoxScreen</Text>
    </View>
  );
};