import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            backgroundColor: "#095397",
            flex: 1,
            padding: 30,
            alignItems: "center",
            justifyContent: "center"
        },

        logo: {
            width: 320,
            height: 130,
            marginBottom: 60
        },

        alert: {
            fontSize: 18,
            color: "#FFF",
            textAlign: "center",
            marginBottom: 20
        },

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#FFF",
            padding: 20,
            marginBottom: 20,
            width: "100%"
        },

        formButton: {
            backgroundColor: "#070A52",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%"
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center"
        },

        btnCreate: {
            marginBottom: 10,
        },

        btnCreateText: {
            color: "#FFF"
        }
    }
);

export default styles