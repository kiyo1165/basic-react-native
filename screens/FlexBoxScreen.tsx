import { View, Text } from 'react-native';
import React, { VFC, useEffect } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: VFC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted Flex box');
    return () => {
      console.log('un mounted Flex-box');
    };
  }, []);
  return (
    <View style={tw('flex-1  bg-gray-300 justify-center items-center')}>
      {/* <View style={tw('w-16 h-16 bg-indigo-500')} />
      <View style={tw('w-16 h-16 bg-green-200')} />
      <View style={tw('w-16 h-16 bg-red-200')} /> */}
      <Text>FlexBoxScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to Hello"
          onPress={() => navigation.navigate('Hello')}
        />
      </View>
    </View>
  );
};
