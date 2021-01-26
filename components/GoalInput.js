import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

     const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
     } 
    
return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.textInput} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            <Button title="ADD" onPress={addGoalHandler}/>
        </View>
    </Modal>
    );
}
    

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      textInput: {
        width: 200, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
      }
  
  });

export default GoalInput;