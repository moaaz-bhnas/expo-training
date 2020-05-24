import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddForm = ({ addTodo }) => {
  const [ todo, setTodo ] = useState('');

  const handleSubmit = useCallback(() => {
    addTodo(todo);
    setTodo('');
  }, [ todo ])

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder="new todo..."
        value={todo}
        onChangeText={setTodo}
      />
      <Button 
        title="Add Todo" 
        color="coral"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6
  }
});

export default memo(AddForm);