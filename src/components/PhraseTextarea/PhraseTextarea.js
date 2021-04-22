// components/Task.js
import React, {useState} from 'react';
import { StyleSheet,Text, SafeAreaView, TextInput,} from 'react-native';

const styles = StyleSheet.create({
  textAreaContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 3,
    opacity: 1.

  },
  controlledTextArea: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 24,
    color: 'rgba(17, 24, 39, 0.5)',
  },
  unControlledTextArea: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 24,
    color: '#111827',
  }
})

export default function PhraseTextarea({placeHolderText, 
  multiline, 
  numberOfLines,
  inputEditable,
  onChangeText,
  inputValue,
}) {

  return (
    <SafeAreaView style={styles.textAreaContainer}>
      <TextInput 
        style={inputEditable ? styles.controlledTextArea : styles.unControlledTextArea}
        textAlign={'center'}
        placeholder={placeHolderText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable= {inputEditable}
        value={inputValue}
        onChangeText={(text) => onChangeText(text)}
      />
    </SafeAreaView>
  );
}