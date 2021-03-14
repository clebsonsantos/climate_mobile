import React, { useState, useEffect} from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import * as Location from 'expo-location'
import styles from "./styles";

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'


import api, {key} from '../../services/api'

const Home = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState({name: 'cloud', color: '#fff'})
  const [bground, setBground] = useState(['#1ed6ff', '#97c1ff'])


  useEffect(()=>{
    (async ()=>{
      let { status} = await Location.requestPermissionsAsync();

      if(status !== 'granted'){
        setErrorMsg('Permissão negada para acessar localização.')
        setLoading(false)
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      console.log(location.coords)

     const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
    // console.log(response.data)

     setWeather(response.data)

     if(response.data.results.currently === 'noite'){
       setBground(['#0c3741', '#0f2f61'])
     }
     switch(response.data.results.condition_slug){
       case 'clear_day':
         setIcon({name: 'partly-sunny', color: '#ffb300'})
        break;
        case 'rain':
          setIcon({name: 'rainy', color: '#fff'})
        break;
        case 'storm':
         setIcon({name: 'thunderstorm-outline', color: '#1f229c'})
        break;
        case 'snow':
         setIcon({name: 'snow-outline', color: '#1f229c'})

     }

     setLoading(false)
    })()
  }, [])
  if(loading){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 17, fontStyle: 'italic'}}>Carregando dados...</Text>
      </View>

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header background={bground} weather={weather} icon={icon}/>
      <Conditions weather={weather}/>
      <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{paddingBottom: '5%', paddingTop: '5%'}}
      style={styles.list}
      data={weather.results.forecast}
      keyExtractor={item => item.date}
      renderItem={({item})=><Forecast data={item}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
