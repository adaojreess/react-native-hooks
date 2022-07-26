import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import useProducers from '../../../../hooks/useProducers';
import Producer from '../Producer';

export default function Producers({header: Header}) {
  const [title, listProducers] = useProducers();

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
