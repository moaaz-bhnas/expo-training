import React, { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
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

  const addTodo = useCallback((text) => {
    setTodos(prevTodos => {
      return ([
        { id: Math.random().toString(), text },
        ...prevTodos
      ]);
    });
  }, []);

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <AddForm addTodo={addTodo} />
        <Todos 
          todos={todos} 
          removeTodo={removeTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
});
