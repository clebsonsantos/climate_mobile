import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Text, Keyboard} from 'react-native';

import { Feather } from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Conditions from '../../components/Conditions'

import api, { key } from '../../services/api'

const Search = () => {


  const navigation =useNavigation()
  const [input, setInput] = useState('')
  const [city, setCity] = useState(null)
  const [error, setError] = useState(null)

  async function handleSearch(){
    
    const response = await api.get(`weather?key=${key}&city_name=${input}`)
    if(response.data.by === 'defaut'){
      setError('Que pena, não encontramos essa cidade!')
      setInput('')
      setCity(null)
      Keyboard.dismiss()
      return
    }
    setCity(response.data)
    setInput('')
    Keyboard.dismiss()
  }

  if(city){
    return(
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backbutton} 
       onPress={()=> navigation.navigate('Home')}
       >
       <Feather
       name='chevron-left'
       size={32}
       color='#000'
       />
       <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.searchbox}>
      <TextInput 
        value={input}
        onChangeText={(value)=> setInput(value)}
        placeholder="Ex: Campinas, Sp"
        style={styles.input}
        />
        <TouchableOpacity style={styles.icon}
        onPress={handleSearch}
        >
          <Feather
          name='search'
          size={26}
          color='#fff'
          />
        </TouchableOpacity>

      </View>
      <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
      >
        <Text style={styles.date}>{city.results.date}</Text>
        <Text style={styles.name}>{city.results.city}</Text>
        <View>
          <Text style={styles.temp}>{city.results.temp}°</Text>
        </View>
        <Conditions weather={city}/>
      </LinearGradient>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity style={styles.backbutton} 
       onPress={()=> navigation.navigate('Home')}
       >
       <Feather
       name='chevron-left'
       size={32}
       color='#000'
       />
       <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.searchbox}>
      <TextInput 
        value={input}
        onChangeText={(value)=> setInput(value)}
        placeholder="Ex: Campinas, Sp"
        style={styles.input}
        />
        <TouchableOpacity style={styles.icon}
        onPress={handleSearch}
        >
          <Feather
          name='search'
          size={26}
          color='#fff'
          />
        </TouchableOpacity>

      </View>
      {error && <Text style={{marginTop: 25, fontSize: 18}}>{error}</Text>}
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
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  icon:{
    width: '15%',
    height: 50,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ed6ff',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8

  },
  header:{
    marginTop: '5%',
    width: '90%',
    paddingTop: '3%',
    paddingBottom: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  date:{
    color: '#fff',
    fontSize: 16
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',

  },
  temp: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  }
})