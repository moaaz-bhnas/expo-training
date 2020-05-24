import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Item = ({ item, removeTodo }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => removeTodo(item.id)}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10
  }
});

export default memo(Item);
