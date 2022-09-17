import React, {useState} from 'react';

import {Button, SafeAreaView, Text, View} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />

      {visible && (
        <View>
          <Greeting />
          <Box rounded={true} size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
