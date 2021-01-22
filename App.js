import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, InteractionManager } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  
  // const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);  
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
  }
  
  return (
    <View style={styles.screen}> 
      <GoalInput addGoalHandler={addGoalHandler}/>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => ( 
            <GoalItem 
              id={itemData.item.id} 
              onDelete={removeGoalHandler} 
              title={itemData.item.value} 
            />
          )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
  

});
