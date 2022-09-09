import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, Keyboard, FlatList } from 'react-native';
import React from 'react';

export default function App() {

  const [text, changeText] = React.useState('');
  const [text2, changeText2] = React.useState('');
  const [result, setResult] = React.useState(null);
  const [concated, concateAll] = React.useState('');
  const [history, setHistory] = React.useState([]);


  const increment = () => {
    setResult(null);
    let sum = Number(text) + Number(text2);

    setResult(sum);
    concateAll(`${text} + ${text2} = ${sum} `);
    setHistory([...history, { key: `${text} + ${text2} = ${sum} ` }]);
    changeText('');
    changeText2('');


  }

  const decrement = () => {
    sum = Number(text) - Number(text2);
    setResult(sum);
    concateAll(`${text} - ${text2} = ${sum} `);
    setHistory([...history, { key: `${text} - ${text2} = ${sum} ` }]);
    changeText('');
    changeText2('');

  }




  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text>Result: {result}</Text>
          <TextInput style={styles.input} onChangeText={text => changeText(text)} value={text} keyboardType="number-pad"></TextInput>
          <TextInput style={styles.input} onChangeText={text => changeText2(text)} value={text2} keyboardType="number-pad" ></TextInput>
        </View>

      <View style={styles.buttonContainer}> 
        <View style={{marginHorizontal:10, height:40}}>
          <Button title="+" onPress={increment}></Button>
          </View>
          <View style={{marginHorizontal:10, height:40}}>
          <Button title="-" onPress={decrement}></Button>

        </View>
</View>
        <View style={styles.listContainer}>

          <Text style={styles.boldText}>History</Text>
          <FlatList style={styles.list}
            data={history}
            extraData={concated}
            renderItem={({ item }) =>
              <Text>{item.key}</Text>}
          />


        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5

  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,

  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignContent: 'center',
    

  },
  listContainer: {
    justifyContent: 'flex-start',
    flex: 0.5,  
    marginTop: 20

  },
  boldText: {
    fontWeight: 'bold'
  }
});
