import React, { memo } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import Item from './components/item';

const Todos = ({ todos, removeTodo }) => {
  return (
    <FlatList 
      style={styles.list}
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Item 
          item={item} 
          removeTodo={removeTodo}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});

export default memo(Todos);
