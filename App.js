import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle}
    ]);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goal.id !== goalId);
    })
  };

  return (
    <View style={styles.main} >
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => 
        <GoalItem 
          id={itemData.item.id}
          onDelete={deleteGoalHandler}
          title={itemData.item.value}/>}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  main: { padding: 60 }
});
