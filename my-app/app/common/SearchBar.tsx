import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search your notes"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon='menu'
      rippleColor='#FFFFFF'
    />
  );
};

export default SearchBar;

