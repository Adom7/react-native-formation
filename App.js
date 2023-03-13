import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function App() {

  const [text, setText] = useState(' World');


  return (
    <View style={styles.container} >
      <Text> {text} </Text>
      <Button
        onPress={() => { setText('Je suis en train de faire un test peut etre que ca fontionne maintenant') }}
        title='Change le text :)'
      >

      </Button>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  }
});
