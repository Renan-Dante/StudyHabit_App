import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import firebase from '../../config/firebase';
import { getFirestore, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';

const db = getFirestore(firebase);

export default function EditActivitie({ route, navigation }) {
    const { id } = route.params;
    const [descricao, setDescricao] = useState("")
    const [prazo, setPrazo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [errorUpdateActivitie, setErrorUpdateActivitie] = useState(null)

    const validade = () => {
        if (descricao == "" || prazo == "" || categoria == "") {
            setErrorUpdateActivitie("Preencha todos os campos!")
        } else {
            setErrorUpdateActivitie(null)
            updateActivity()
        }
    }

    useEffect(() => {
        // Carregar dados da atividade com base no ID
        const loadActivity = async () => {
            try {
                const activityRef = doc(db, 'activities', id);
                const activitySnapshot = await getDoc(activityRef);

                if (activitySnapshot.exists()) {
                    const { tarefa, prazo, categoria } = activitySnapshot.data();
                    setDescricao(tarefa);
                    setPrazo(prazo);
                    setCategoria(categoria);
                } else {
                    // Atividade não encontrada
                }
            } catch (error) {
                console.error('Erro ao carregar atividade:', error);
            }
        };

        loadActivity();
    }, []);

    const updateActivity = async () => {
        try {
            const activityRef = doc(db, 'activities', id);
            await updateDoc(activityRef, {
                tarefa: descricao,
                prazo: prazo,
                categoria: categoria,
                data_registro: serverTimestamp()
            });

            // Atualização bem-sucedida

            // Navegar de volta para a tela anterior (Home)
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao atualizar atividade:', error);
        }
    };

    return (
        <View style={styles.container}>
            {errorUpdateActivitie != null &&
                <Text style={styles.alert}>{errorUpdateActivitie}</Text>
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
                <Text style={styles.textBtn}>Atualizar Tarefa</Text>
            </TouchableOpacity>
        </View>
    );
}
