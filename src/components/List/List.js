import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from 'react-router-native';
import ListItem, {style} from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';
import actionButton from '../ActionButton/ActionButton';

const styles = StyleSheet.create({
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
        (styles.container,
        {backgroundColor: isLightMode ? '#FFFFFF' : '#111827'})
      }>
      <View style={style.container}>
        <ListItem name={name} />
        <Link to={`/${name}`} component={actionButton} buttonLabel={'Learn'} />
      </View>
    </View>
  );
}
