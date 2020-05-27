import React, { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Todos from './components/todos';
import AddForm from './components/addForm';

export default function App() {
  const [ todos, setTodos ] = useState([
    { id: '1', text: 'Meditate'},
    { id: '2', text: 'work'},
    { id: '3', text: 'meditate'},
    { id: '4', text: 'socialize'}
  ]);

  const removeTodo = useCallback((id) => {
    setTodos(prevTodos => (
      prevTodos.filter(todo => todo.id !== id)
    ));
  }, [])

  const addTodo = useCallback((text, setText) => {
    if (text.length <= 3) {
      Alert.alert('OOPS!', 'Todo must be longer than 3 characters', [
        { text: 'Understood', onPress: () => console.log('closed') }
      ]);
      return;
    }

    setTodos(prevTodos => {
      return ([
        { id: Math.random().toString(), text },
        ...prevTodos
      ]);
    });
    setText('');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <AddForm addTodo={addTodo} />
          <Todos 
            todos={todos} 
            removeTodo={removeTodo}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    paddingHorizontal: 10,
    flex: 1
  }
});
