import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList   } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalhandler = goalTitle => {
      setCourseGoals([...courseGoals,{id:Math.random().toString(), value:goalTitle }]);
      setIsAddMode(false)
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(
      courseGoals.filter((goal) => goal.id !== goalId)
    )
  }

  const closeModal = ()=>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
     <GoalInput visible={isAddMode} close={closeModal} onAddGoal={addGoalhandler}/>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => <GoalItem onDelete ={removeGoalHandler} id={itemData.item.id} title={itemData.item.value}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:30
  }
});
