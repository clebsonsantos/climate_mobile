import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import { Feather } from '@expo/vector-icons'



const Search = () => {
  const [input, setInput] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backbutton}>
       <Feather
       name='chevron-left'
       size={32}
       color='#000'
       />
       
      </TouchableOpacity>
      <View style={styles.searchbox}>
        <TextInput 
        value={input}
        onChangeText={(value)=> setInput(value)}
        placeholder="Ex: Campinas, Sp"
        style={styles.input}
        />
        <TouchableOpacity style={styles.icon}>
          <Feather
          name='search'
          size='22'
          color='#fff'
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    backgroundColor: '#e8f0ff'
  },
  backbutton:{
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 10

  },
  searchbox:{
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ddd',
    width: '90%',
    height: 50,
    borderRadius: 8
  },
  input:{
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  icon:{

  }
})