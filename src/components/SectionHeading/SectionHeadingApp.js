import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Context} from '../../util/GlobalContext';
import {style} from './SectionHeading';

export default function SectionHeadingApp({title}) {
  const {isLightMode} = useContext(Context);
  return (
    <View>
      <Text style={isLightMode ? style.lightModeText : style.darkModeText}>
        {title}
      </Text>
    </View>
  );
}
