import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';


export default function NotePad() {
  const [text, setText] = React.useState("");
  return (
    <View >
      
      <TextInput
        label="Title"
        value={text}
        onChangeText={text => setText(text)}
        selectionColor='#FFFFFF'
      />

      <TextInput
        label="Title"
        multiline
      />

    </View>
  )
}