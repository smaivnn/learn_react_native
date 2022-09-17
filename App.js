import React, {useState} from 'react';

import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Counters from './components/Counters';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counters count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
