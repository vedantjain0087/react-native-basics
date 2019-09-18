import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalhandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

    return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" onChangeText={goalInputHandler} style={styles.input} value={enteredGoal}/>
    <Button title="add" onPress={addGoalhandler}></Button>
   <Button title="cancel" onPress={props.close} color="red" /> 
  </View>
  </Modal>
    )
}
const styles = StyleSheet.create({
inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
input:{
    width:'80%',
    borderColor:'black',
    borderWidth:1,
    padding:10,
    marginBottom:10
}
})
export default GoalInput