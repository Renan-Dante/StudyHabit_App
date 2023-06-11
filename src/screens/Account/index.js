import { Text, TouchableOpacity, View } from 'react-native'
import firebase from '../../config/firebase'
import { getAuth, signOut } from "firebase/auth";
import styles from './style';

export default function Account({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={signOutFirebase}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}