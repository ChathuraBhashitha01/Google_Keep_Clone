import * as React from 'react';
import { Card, Text } from 'react-native-paper';

const NoteCard = (props:any) => (
  <Card className='mt-6 w-[96%] ml-2 '>
    <Card.Content className='w-full h-auto bg-red-700'>
      <Text variant="titleLarge">{props.title}</Text>
      <Text variant="bodyMedium">{props.content}</Text>
    </Card.Content>
  </Card>
);

export default NoteCard;