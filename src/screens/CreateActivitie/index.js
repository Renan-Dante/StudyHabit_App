import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const db = getFirestore(firebase)

export default function CreateActivitie({navigation}){
    const [descricao, setDescricao] = useState("")
    const [prazo, setPrazo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [errorCreateActivitie, setErrorCreateActivitie] = useState(null)

    const validade = () => {
        if(descricao == "" || prazo == "" || categoria == ""){
            setErrorCreateActivitie("Preencha todos os campos!")
        }else{
            setErrorCreateActivitie(null)
            createActivitie()
        }
    }

    const createActivitie = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        
        const newActivitie = addDoc(collection(db, 'activities'), {
            tarefa: descricao,
            prazo: prazo,
            categoria: categoria,
            data_registro: serverTimestamp(),
            userId: user.uid // Associar o ID do usuário à atividade
        });

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateActivitie != null &&
                <Text style={styles.alert}>{errorCreateActivitie}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='O que deve ser feito?'
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Prazo'
                value={prazo}
                onChangeText={setPrazo}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Categoria'
                value={categoria}
                onChangeText={setCategoria}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade}
            >
                <Text style={styles.textBtn}>Criar Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}