import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {getHeader} from '../../services/getData';

import logo from '../../../../assets/logo.png';

class Header extends React.Component {
  state = {
    dataHeader: {
      title: '',
      subtitle: '',
    },
  };

  fetchDataHeader() {
    const data = getHeader();
    this.setState({dataHeader: data});
  }

  componentDidMount() {
    this.fetchDataHeader();
  }

  render() {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>{this.state.dataHeader.title}</Text>
        <Text style={styles.subtitle}>{this.state.dataHeader.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  title: {
    color: '#464646',
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Header;
