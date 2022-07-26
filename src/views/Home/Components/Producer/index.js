import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Stars from '../Stars';

export default function Producer({name, distance, image, stars}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setSelected(!selected);
      }}>
      <Image source={image} accessibilityLabel={name} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars quantity={stars} editable={selected} large={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    //android
    elevation: 4,
    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    marginVertical: 16,
    marginLeft: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});
