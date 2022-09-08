import React from 'react';
import { View, TouchableOpacity, Image, Text} from 'react-native';

//import { useNavigation } from '@react-navigation/native';



export default function Components(props) {
  
  
 
  return (

      <View style={{ width: '100%', height:600, margin: 2 }}>
        
        
        <TouchableOpacity >
          
           <Image style={{width: '100%', height: 510, marginLeft: 1,marginRight: 1,marginBottom: 5}} source={{uri: props.data.image}} 

           
           />
          
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 20, fontFamily: 'Reboco', fontWeight: '700',marginLeft: 3}}>{props.data.title}</Text>
        </View>
      </View>
    
  );
};





  