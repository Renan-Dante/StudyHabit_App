import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateActivitie from './src/screens/CreateActivitie';
import Home from './src/screens/Home/';
import Account from './src/screens/Account/';
import EditActivitie from "./src/screens/EditActivitie";
import { MaterialIcons } from "@expo/vector-icons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#095397' }, //Cor de de fundo do topo
                    headerTintColor: '#FFF', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário' }} />
                <Stack.Screen name="CreateActivitie" component={CreateActivitie} options={{ title: 'Cadastro de Terefas' }} />
                <Stack.Screen name="EditActivitie" component={EditActivitie} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Rotina"){
                        iconName = "home";
                    }else if(route.name == "Conta"){
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#FFF", //Cor de ícones ativos
                tabBarInactiveTintColor: "#00F", //Cor de ícones inativos
                tabBarStyle: {backgroundColor: "#070A52"}, //Cor de fund da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#FFF", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: {backgroundColor: '#095397'} //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Rotina" component={Home}/>
            <Tab.Screen name="Conta" component={Account}/>
        </Tab.Navigator>
    );
}

