import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList   } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalhandler = () => {
      setCourseGoals([...courseGoals,{key:Math.random.toString(), value:enteredGoal}])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course3 Goal" onChangeText={goalInputHandler} style={styles.input} value={enteredGoal}/>
        <Button title="add" onPress={addGoalhandler}></Button>
      </View>
      <FlatList keyExtractor={(item, index) => item.key} data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/> }/>
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
