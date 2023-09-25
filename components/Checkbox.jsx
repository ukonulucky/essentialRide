import Checkbox from 'expo-checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CheckBox({isChecked,setChecked}) {
  return (  <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4425f5' : undefined}
        />
    
  );
}

const styles = StyleSheet.create({
 
  checkbox: {
   borderRadius:5,
   width:18,
   height:18
  },
});