import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [activitie, setActivitie] = useState([])
    const [completedActivities, setCompletedActivities] = useState([]);

    const deleteActivitie = (id) => {
        deleteDoc(doc(db, "activities", id))
    }

    const editActivitie = (id) => {
        navigation.navigate('EditActivitie', { id: id })
    }

    useEffect(() => {
        const q = query(collection(db, "activities"), orderBy("data_registro", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const activities = [];
            querySnapshot.forEach((doc) => {
                activities.push({ ...doc.data(), id: doc.id });
                // console.log(doc.data())
            });
            setActivitie(activities)
        });
    }, [])

    const completedActivitie = (id) => {
        // Verifique se a atividade já está marcada como concluída
        if (completedActivities.includes(id)) {
            // Remova o ID da atividade do estado completedActivities
            setCompletedActivities(completedActivities.filter((activityId) => activityId !== id));
        } else {
            // Adicione o ID da atividade ao estado completedActivities
            setCompletedActivities([...completedActivities, id]);
        }
    };

    const remainingActivities = activitie.length - completedActivities.length;

    return (
        <View style={styles.container}>
            
            <View style={styles.conclusionActivitie}>
                <Text style={styles.titleMessage}>Tarefas:</Text>
                {completedActivities.length >= 0 && (
                    <Text style={styles.activitieMessage}>Concluídas: {completedActivities.length}</Text>
                )}
                {remainingActivities >= 0 && (
                    <Text style={styles.activitieMessage}>Restantes: {remainingActivities}</Text>
                )}
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={activitie}
                renderItem={({ item }) =>
                    <View style={[styles.activitie, completedActivities.includes(item.id) && styles.completedActivitie]}>
                        <View>
                            <Text style={styles.descricao}>{item.tarefa}</Text>
                            <Text style={styles.prazo}>Tempo: {item.prazo}</Text>
                            <Text style={styles.categoria}>{item.categoria}</Text>
                            <Text></Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => completedActivitie(item.id)}
                        >
                            <MaterialIcons name="check-circle" size={26} color="#3982c4" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => editActivitie(item.id)}
                        >
                            <MaterialIcons name="edit" size={26} color="#F90" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteActivitie(item.id)}
                        >
                            <MaterialIcons name="delete" size={26} color="#F00" />
                        </TouchableOpacity>
                    </View>
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateActivitie')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}