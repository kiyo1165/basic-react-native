import { View, Text } from 'react-native';
import React, { VFC, useEffect, useState, useCallback } from 'react';
import tw from 'tailwind-rn';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button, Input } from 'react-native-elements';
import { Child } from '../components/Child';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;

export const HelloScreen: VFC<Props> = ({ navigation }) => {
  const [text, setText] = useState('');
  const [printText, setPrintText] = useState('');
  useEffect(() => {
    console.log('mounted Hello');
    return () => {
      console.log('un mounted Hello');
    };
  }, []);
  const printMsg = useCallback(() => {
    console.log(`print: ${printText} `);
  }, [printText]);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      <Text>HeloScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to ReduxTK"
          onPress={() => navigation.navigate('ReduxTK')}
        />
      </View>
      <Input
        placeholder='"type print text'
        autoCompleteType={undefined}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Input
        placeholder='"type print Msg'
        autoCompleteType={undefined}
        value={printText}
        onChangeText={(text) => setPrintText(text)}
      />
      <Text>{printText}</Text>
      <Child printMsg={printMsg} />
    </View>
  );
};
