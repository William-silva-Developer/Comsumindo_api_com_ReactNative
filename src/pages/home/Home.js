import React from 'react';
import { FlatList } from 'react-native';

import { useEffect, useState } from 'react';





import Film from '../../../src/components/Film';
import { ScrollView, View } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Pages() {

  const [filmes, setFilmes] = useState([ {
    "rank": "1",
    "title": "The Shawshank Redemption",
    "fullTitle": "The Shawshank Redemption (1994)",
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
    "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
    "id": "1"
   },
   {
    "rank": "2",
    "title": "The Godfather",
    "fullTitle": "The Godfather (1972)",
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
    "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
    "id": "2"
   },
   {
    "rank": "3",
    "title": "The Dark Knight",
    "fullTitle": "The Dark Knight (2008)",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
    "id": "3"
   },

  ]);

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
   //getFilmes();

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


