import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default Number = ({ number }) => {
  const handlePress = () => {
    console.info(number);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.random}>{number}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
