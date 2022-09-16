import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Switch } from 'react-native';
import React from 'react';

function TwoText(props){
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>{props.name}</Text>
      <Text style={styles.textView}>{props.value}</Text>
    </View>
  )
}

export default function App() {
  const [value, setValue] = React.useState('Type something...')
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(enabled => !enabled);
  return (
    <View style={[styles.container,(isEnabled ? styles.black : styles.white)]}>

      <TextInput 
        style = {styles.textInput}
        onChangeText = {text => setValue(text)} />
      <Text style={styles.textView}>{value}</Text>

      <Button title='Clear' onPress={() => setValue('')}></Button>

      <Switch 
        onValueChange={toggleSwitch}
        value={isEnabled}
      ></Switch>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  textView: {
    fontSize: 24,
    color: '#00f'
  },
  textInput: {
    color: '#aaa',
    borderBottomColor: '#aaa',
    borderWidth: '1px',
    padding: 5,
    width: '90%'
  },
  black: {
    backgroundColor: '#000'
  },
  white: {
    backgroundColor: '#fff'
  }
});
