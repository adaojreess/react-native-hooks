import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Star from '../Star';

export default function Stars({quantity, editable = true, large = true}) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const RenderStars = () => {
    const starList = [];
    for (let i = 0; i < 5; i++) {
      starList.push(
        <Star
          key={i}
          onPress={() => setCurrentQuantity(i + 1)}
          disabled={!editable}
          large={large}
          full={i < currentQuantity}
        />,
      );
    }
    return starList;
  };
  return (
    <View style={styles.row}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
