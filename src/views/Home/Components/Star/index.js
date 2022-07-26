import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import star from '../../../../assets/estrela.png';
import starGrey from '../../../../assets/estrelaCinza.png';

export default function Star({onPress, disabled, large, full}) {
  const currentImage = () => {
    if (full) {
      return star;
    }
    return starGrey;
  };
  const style = stylesFunction(large);
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image style={style.star} source={currentImage()} />
    </TouchableOpacity>
  );
}

const stylesFunction = large => {
  return StyleSheet.create({
    star: {
      width: large ? 36 : 12,
      height: large ? 36 : 12,
    },
  });
};
