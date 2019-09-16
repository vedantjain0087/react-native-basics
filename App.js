import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalhandler = () => {
      setCourseGoals([...courseGoals,enteredGoal])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.input} value={enteredGoal}/>
        <Button title="add" onPress={addGoalhandler}></Button>
      </View>
      <View>
        {courseGoals.map((goal) => 
          <Text>{goal}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:30
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    width:'80%',
    borderColor:'black',
    borderWidth:1,
    padding:10
  }
});
