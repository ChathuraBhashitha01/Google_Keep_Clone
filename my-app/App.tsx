import { View, Text } from 'react-native'
import React from 'react'
import HomePage from './app/pages/HomePage'
import NotePad from './app/pages/NoteCreate'
import "./global.css"

export default function App() {
  return (
    <View>
      <NotePad/>
    </View>
  )
}