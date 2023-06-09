import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };
  function addGoalHandler() {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course Goal !" onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.caroussel} >
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>
        <View style={styles.square} ></View>

      </View>
      <View style={styles.goalsContainer}>
        <Text  >List of Goals Maybe </Text>
        <Text  > {enteredGoalText}  </Text>
        <Text  >List of Goals Maybe </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'orange',

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    alignItems: 'center'
  },
  caroussel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  square: {
    borderRadius: 10,
    width: 100,
    height: 100,
    backgroundColor: "red",

  },
});
