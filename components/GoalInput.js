import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

    return (<View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.input} value={enteredGoal}/>
    <Button title="add" onPress={props.onAddGoal.bind(this,enteredGoal)}></Button>
  </View>
    )
}
const styles = StyleSheet.create({
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
})
export default GoalInput