import React from 'react';
import { FlatList } from 'react-native';

import { useEffect, useState } from 'react';





import Film from '../../../src/components/Film';
import { ScrollView, View } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Pages() {

  const [filmes, setFilmes] = useState([ ]);

  useEffect(()=>{

    async function getFilmes(){
      try {
        const res = await fetch('https://62e0ad38fa8ed271c4861696.mockapi.io/api/v1/filmes');

        const data = await res.json();

        setFilmes(data);
        
      } catch (error) {
        console.log("Falhou!" + error)
        
      }
    }
   getFilmes();

  },[]);




  return (
    
    <SafeAreaView>
      
   
           

        <FlatList 
          data={filmes}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> <Film data={item} />}
        /> 

      
      

   
    </SafeAreaView>
  );
}


