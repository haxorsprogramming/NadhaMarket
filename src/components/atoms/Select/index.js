import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text>Label select option</Text>
      <View>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="PHP" value="php" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Ruby" value="ruby" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
