import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {createNativeStackNavigator} from '@react-navigation/native-stack';


import  { MaterialIcons} from '@expo/vector-icons';

//TELAS
import Home from '../pages/home/Home';
import Notification from '../pages/notificacao/Notification';
import Configure from '../pages/configuracao/Configure';
import Contact from '../pages/contato/Contact';

import Detalhe from '../components/Detalhe';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

 function Route(){
    return (
       

            <Tab.Navigator initialRouteName='Home'
                
                
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        
                        
                    },
                    headerShown: false,
                
                    
                }}
            >
                <Tab.Screen 
                name='Inicio'
                component={Home}
                options={{
                
                    tabBarIcon: ({size,color})=> (
                        <MaterialIcons 
                        name='home'
                        color={color}
                        size={size}
                        />
                    )
                }}
                />

                <Tab.Screen 
                name='Notificação'
                component={Notification}
                options={{
                    tabBarIcon: ({size,color})=> (
                        <MaterialIcons 
                        name='notifications'
                        color={color}
                        size={size}
                        />
                    )
                }}
                />

                <Tab.Screen 
                name='Configurações'
                component={Configure}
                options={{
                    tabBarIcon: ({size,color})=> (
                        <MaterialIcons 
                        name='settings'
                        color={color}
                        size={size}
                        />
                    )
                }}
                />

                <Tab.Screen 
                name='Contato'
                component={Contact}
                
                options={{
                    tabBarIcon: ({size,color})=> (
                        <MaterialIcons 
                        name='contact-page'
                        color={color}
                        size={size}
                        />
                    )
                }}
                />
                
               
                
            
            </Tab.Navigator>

          
        


    );
};

 function Detalhes(){
    return (
        <Stack.Screen 
                    name='Detalhe'
                    component={Detalhe}
                    screenOptions={{
                        
                    }}
                />

    )
};
export default Route; Detalhes;
 