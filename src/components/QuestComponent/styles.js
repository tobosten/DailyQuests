import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    questContainer: {
        borderWidth: 1,
        margin: 10,
        flexDirection: "row",
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    questDayContainer: {
        /* borderWidth: 1, */
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
    },
    questArrowContainer: {
        /* borderWidth: 1, */
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginRight: 10,  
    },
    dailyQuests: {
        borderWidth: 1,
        marginTop: -10,
        marginLeft: 15,
        marginRight: 15,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
})

export default styles;