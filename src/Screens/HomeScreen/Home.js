import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./styles"

const Home = ({ navigation }) => {

    const [continueBlink, setContinueBlink] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setContinueBlink((continueBlink) => setContinueBlink(!continueBlink))
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { marginRight: -5 }]}>Daily</Text>
                    <Image source={require("../../assets/questImage.png")} style={{ height: 50, width: 60 }} />
                    <Text style={styles.title}>Quests</Text>
                </View>
                <TouchableOpacity
                    style={{ flex: 3, alignItems: "center" , paddingTop: "40%"}}
                    onPress={() => {
                        navigation.navigate("quests")
                    }}
                >
                    <View style={styles.bottomContainer}>
                        <Text style={[styles.continueText,
                        { display: continueBlink ? "none" : "flex" }]}>
                            Press to continue</Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Home