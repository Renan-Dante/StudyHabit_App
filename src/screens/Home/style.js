import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    activitie: {
        backgroundColor: "#FFF",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    completedActivitie: {
        backgroundColor: '#A9A9A9', // Cor para a atividade concluída
    },

    conclusionActivitie: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleMessage: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    activitieMessage: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    descricao: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    prazo: {
        fontSize: 18,
        color: "#095397"
    },

    categoria: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    btnCreate: {
        backgroundColor: '#095397',
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF'
    }
});

export default styles