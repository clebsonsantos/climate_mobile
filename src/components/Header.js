import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient'
import { Ionicons} from '@expo/vector-icons'

// import { Container } from './styles';

const Header = ({background, weather, icon}) => {
  return (
    <LinearGradient 
    style={styles.header}
    colors={background}
    >
     <Text style={styles.date}>{weather.results.date}</Text>

    <Text style={styles.city}>{weather.results.city_name}</Text> 

    <Ionicons 
    name={icon.name}
    color={icon.color}
    size={150}
    />
     <Text style={styles.temp}>{weather.results.temp}°</Text> 
    </LinearGradient>
  )
}

export default Header;


const styles = StyleSheet.create({
  header:{
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  date:{
    color: '#fff',
    fontSize: 17
  },
  city:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  temp:{
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold'
  }

})