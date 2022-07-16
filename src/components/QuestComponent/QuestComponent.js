import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const QuestComponent = ({ date, quests }) => {

    const [openQuests, setOpenQuests] = useState(false)


    return (
        <View >
            <View style={styles.questContainer}>
                <View style={styles.questDayContainer}>
                    <Text style={{ fontSize: 20 }}>{date}</Text>
                </View>
                <View style={styles.questArrowContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenQuests(!openQuests)
                        }}
                        style={styles.arrowButton}>
                        <Image source={require("../../assets/arrowDown.png")} style={{ width: 50 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {openQuests == true ? (
                <View style={styles.dailyQuests}>
                    {quests}
                </View>
            ) : (
                <></>
            )}

        </View>
    )
}

export default QuestComponent