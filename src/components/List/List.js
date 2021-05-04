import React, {useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Link} from 'react-router-native';
import ListItem, {style} from '../ListItem/ListItem';
import ActionButton from '../ActionButton/ActionButton';
import {Context} from '../../util/GlobalContext';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderStartWidth: 1,
    borderEndWidth: 1,
    paddingLeft: 16,
    paddingRight: 20,
  },
});

export default function List({name, onRowPress}) {
  const {isLightMode} = useContext(Context);
  return (
    <TouchableHighlight
      style={
        (styles.container,
        {backgroundColor: isLightMode ? '#FFFFFF' : '#111827'})
      }>
      <View style={style.container}>
        <ListItem name={name} />
        <Link to={`/${name}`} component={ActionButton} buttonLabel={'Learn'} />
      </View>

      {/* <Link to={`/${name}`}>
        <ListItem onPress={onRowPress} name={name}>
          <ActionButton buttonLabel={'Learn'} />
        </ListItem>
      </Link> */}
    </TouchableHighlight>
  );
}
