import React from 'react';
import ListItem from '../ListItem/ListItem';

// List should map several list items, this currently does nothing
export default function List({name}) {
  return <ListItem name={name} />;
}
