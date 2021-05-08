import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import ActionButton from '../ActionButton/ActionButton';
import {style} from './ListItem';
import {Context} from '../../util/GlobalContext';

export default function ListItem({name}) {
  const {
    isLightMode,
    isButtonLabel,
    toogleButtonLabel,
    handleActionButton,
    buttonLabel,
  } = useContext(Context);

  return (
    <View style={style.container}>
      <Text style={(style.text, {color: isLightMode ? '#111827' : '#FFFFFF'})}>
        {name}
      </Text>
      {isButtonLabel ? (
        <Link
          to={`/${name}`}
          component={ActionButton}
          onPress={toogleButtonLabel}
          buttonLabel={'Learn'}
        />
      ) : (
        <ActionButton
          buttonLabel={buttonLabel}
          onPress={() => handleActionButton(name)}
        />
      )}
    </View>
  );
}
