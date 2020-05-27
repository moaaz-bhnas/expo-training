import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Item = ({ item, removeTodo }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => removeTodo(item.id)}
    >
      <Text>{item.text}</Text>
      <MaterialIcons name="delete" size={24} color="#E65A55" />
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
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default memo(Item);
