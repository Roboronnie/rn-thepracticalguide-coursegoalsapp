import React, { useState} from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputBox} >
        <TextInput
          placeholder="Enter a Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    inputBox : {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
        width: 200,
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
    }
});

export default GoalInput;