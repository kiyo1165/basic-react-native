import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'tailwind-rn';

export const HelloScreen = () => {
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un mounted Hello');
    };
  }, []);
  return (
    <View>
      <Text>HeloScreen</Text>
    </View>
  );
};
