import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";

import Menu from '../../components/Menu'
import Header from '../../components/Header'
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu/>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
