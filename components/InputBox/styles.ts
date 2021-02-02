import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end",
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        flex: 1,
        alignItems: "flex-end",
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icons: {
        marginHorizontal: 5,
    },
});

export default styles;
