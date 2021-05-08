import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListItem from '../ListItem/ListItem';

export const styles = StyleSheet.create({
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
  return (
    <View style={styles.container}>
      <View>
        <ListItem name={name} />
      </View>
    </View>
  );
}
