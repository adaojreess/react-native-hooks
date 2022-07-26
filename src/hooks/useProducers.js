import {useState, useEffect} from 'react';
import {getProducers} from '../services/getData';

export default function useProducers() {
  const [title, setTitle] = useState('');
  const [listProducers, setListProducers] = useState([]);

  useEffect(() => {
    const producers = getProducers();
    setTitle(producers.title);
    setListProducers(producers.list);
  }, []);

  return [title, listProducers];
}
