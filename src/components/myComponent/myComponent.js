// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function myComponent({label}) {

  return (
    <SafeAreaView >
      <TextInput 
        placeholder={label}
      />
    </SafeAreaView>
  );
}