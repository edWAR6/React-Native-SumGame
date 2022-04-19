import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Number from "./Number";

export default Game = ({ randomNumbers }) => {
  // const target = 10 + Math.floor(40 * Math.random()); // 10...50
  const numbers = Array.from({ length: randomNumbers}).map(() => 1 + Math.floor(10 * Math.random()));
  const target = numbers.slice(0, randomNumbers -2).reduce( (acc, cur) => acc + cur, 0 );

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const isNumberSelected = numberIndex => selectedNumbers.some(number => number === numberIndex);

  return (
    <View>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {numbers.map((number, index) => (
          <Number key={index} number={number} isSelected={isNumberSelected(index)} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
