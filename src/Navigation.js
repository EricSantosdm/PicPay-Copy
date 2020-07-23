import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AntDesign,Ionicons} from '@expo/vector-icons';
import HomeScreen from './screens/home/Home';
import WalletScreen from './screens/wallet/Wallet';
import PayScreen from './screens/pay/Pay';

import PayButton from './components/payButton';

const Tab = createBottomTabNavigator();
const icons = {
    Home:{
        lib:AntDesign,
        name: 'home',
    },
    Wallet:{
        lib:AntDesign,
        name: 'creditcard',
    },
    Notifications:{
        lib:Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings:{
        lib:AntDesign,
        name: 'setting',
    },
};

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions={({route,navigation }) =>({
                tabBarIcon:({color, size, focused})=>{
                    if(route.name==="Pay"){
                        return (<PayButton
                        onPress={()=>navigation.navigate('Pay')}
                        focused={focused}
                        />);
                    }
                    const { lib:Icon, name}=icons[route.name];
                        return <Icon name={name} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                style:{
                    backgroundColor:'#131418',
                    borderTopColor:'rgba(255,255.255.0.2)',
                },
                activeTintColor:'#fff',
                inactiveTintColor:'#92929c',
            }}
        >
            <Tab.Screen 
            options={{
                title: 'Inicio',
            }}
            name="Home" component={HomeScreen}/>
            <Tab.Screen 
             options={{
                title: 'Carteira',
            }}
            name="Wallet" component={WalletScreen}/>
            <Tab.Screen 
             options={{
                title: '',
            }}
            name="Pay" component={PayScreen}/>


            <Tab.Screen 
             options={{
                title: 'Notificações',
            }}
            name="Notifications" component={PayScreen}/>

           
            <Tab.Screen 
             options={{
                title: 'Configurações',
            }}
            name="Settings" component={PayScreen}/>
        </Tab.Navigator>
    );
}