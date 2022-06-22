import { View, Text } from 'react-native';
import React, { memo, VFC } from 'react';
import tw from 'tailwind-rn';
import { Button } from 'react-native-elements';

type Props = {
  printMsg: () => void;
};

const ChildMemo: VFC<Props> = ({ printMsg }) => {
  console.log('renderd child component');
  return (
    <View>
      <Text style={tw('my-3')}>Child</Text>
      <Button title="Print" onPress={printMsg} />
    </View>
  );
};

export const Child = memo(ChildMemo);
