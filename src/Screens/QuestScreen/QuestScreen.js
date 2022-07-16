import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import QuestComponent from '../../components/QuestComponent/QuestComponent'
import CheckmarkComponent from '../../components/CheckmarkComponent'
import Moment from 'react-moment';
import moment from 'moment';


const QuestScreen = () => {

    // getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds
    let date = new Date();

    const object = {
        date: "16th",
        quests: {
            q1: { task: "Tvätta", completion: false },
            q2: { task: "Träna", completion: false },
            q3: { task: "Äta", completion: false },
            q4: { task: "Nattmacka", completion: false },
        }
    }


    return (
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.mainTitle}>Quests</Text>
            <View style={styles.questsContainer}>

                <QuestComponent
                    date={object.date}
                    quests={
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            {
                                Object.values(object.quests).map((item, index) => (
                                    <View style={styles.questsWindow} key={index}>
                                        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 20 }}>
                                            <Text>{item.task}</Text>
                                        </View>
                                        <View style={{ flex: 0.15, marginRight: 20 }}>
                                            <CheckmarkComponent />
                                        </View>
                                    </View>
                                ))
                            }
                        </View>

                    }
                />

                



            </View>
        </ScrollView>
    )
}

export default QuestScreen