import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import ListItem from '../ListItem/ListItem';
import {Context} from '../../util/GlobalContext';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderStartWidth: 1,
    borderEndWidth: 1,
    paddingLeft: 16,
    paddingRight: 20,
  },
});

export default function List({name}) {
  const {isLightMode} = useContext(Context);
  return (
    <View
      style={
        (style.container,
        {backgroundColor: isLightMode ? '#FFFFFF' : '#111827'})
      }>
      <Link to={`/${name}`}>
        <ListItem name={name} />
      </Link>
    </View>
  );
}
