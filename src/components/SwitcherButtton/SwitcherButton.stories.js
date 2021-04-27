import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherButton from './SwitcherButton';

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

function Language() {
  const [isEn, setIsLan] = useState(true);

  function toogleLang() {
    setIsLan(!isEn);
  }

  return (
    <View>
      <SwitcherButton lang={isEn} onPress={toogleLang}></SwitcherButton>
    </View>
  );
}

storiesOf('SwitcherButton', module)
  .addDecorator(story => <View style={style.container}>{story()}</View>)
  .add('Malagasy language', () => <Language />)
  .add('English language', () => <Language />);
