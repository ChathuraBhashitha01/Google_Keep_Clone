import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NoteFlow from '../pages/NoteFlow'
import NotPad from './NoteCreate'
import SideBar from '../common/SideBar'
import { Searchbar,Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {router } from 'expo-router';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;


export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View className='w-full h-full relative bg-green-400'>
       
        <View className='mt-4'>
          <Searchbar 
            placeholder="Search your notes"
            onChangeText={setSearchQuery}
            value={searchQuery}
            icon='menu'
            
          />
        </View>
        
        <NoteFlow/>

        <View className='h-full w-[75%] bg-white absolute left-0 top-0 m-auto hidden '>
          <Text>SideBar</Text>
        </View>

        <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action icon="sticker-check-outline" onPress={() => {}} />
        <Appbar.Action icon="brush" onPress={()=>router.push('/pages/NoteCreate')} />
        <Appbar.Action icon="microphone-outline" onPress={() => {}} />
        <Appbar.Action icon="image-outline" onPress={() => {}} />
        <FAB
          mode="flat"
          size="medium"
          icon="plus-circle-outline"
          onPress={() => {}}
          style={[
            styles.fab,
            { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
          ]}
        />
      </Appbar>

    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});
