import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import producers from '../../../../mocks/producers';
import {getProducers} from '../../../../services/getData';
import Producer from '../Producer';

export default function Producers({header: Header}) {
  const [title, setTitle] = useState('');
  const [listProducers, setListProducers] = useState([]);

  useEffect(() => {
    const producers = getProducers();
    setTitle(producers.title);
    setListProducers(producers.list);
  }, []);

  const ListHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={listProducers}
        renderItem={({item}) => <Producer key={item.name} {...item} />}
        key={({name}) => name}
        ListHeaderComponent={ListHeader}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
