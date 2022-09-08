import React from 'react';
import { View, StyleSheet, Text } from 'react-native';





export default function Pages({route}) {

  
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.sub}>{route.params?.titulo}</Text>
        </View>
        <Text style={styles.descricao}>Descrição: {route.params?.descricao}</Text>
        <Text style={styles.rank}>Rank: {route.params?.posicao}</Text>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#aaa',
    marginLeft: 20,
    marginTop: 10
    
  },
  titulo: {
    backgroundColor: '#fffaf0',
    width: 300,
    height: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub: {
    fontWeight: 'bold',
    padding: 2,
  },
  descricao: {
    fontWeight: 'bold',
    padding: 1,
    marginLeft: 5,
  },
  rank: {
    fontWeight: 'bold',
    padding: 1,
    marginLeft: 5,

  }

  
});