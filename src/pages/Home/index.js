import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "./styles";

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'
const mylist = [
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "snow"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 27,
    "min": 19,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 26,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 25,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 25,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 28,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 29,
    "min": 19,
    "description": "Tempo nublado",
    "condition": "cloud"
  },
  {
    "date": "23/03",
    "weekday": "Ter",
    "max": 25,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "storm"
  }
]


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header />
      <Conditions/>
      <FlatList 
      horizontal={true}
      contentContainerStyle={{paddingBottom: '5%', paddingTop: '5%'}}
      style={styles.list}
      data={mylist}
      keyExtractor={item => item.date}
      renderItem={({item})=><Forecast data={item}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
