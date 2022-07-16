import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

const CheckmarkComponent = () => {

    const [done, setDone] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => {
                setDone(!done)
                console.log()
            }}
            style={{
                backgroundColor: "lightgray",
                height: 30,
                width: 30,
                margin: 5,
                borderRadius: 5,
                elevation: 5,
                justifyContent: "center"
                }} >
            {done == true ? (
                <Image source={require("../assets/checkMark.png")}
                    style={{ position: "absolute", width: 50, marginLeft: -5 }} />
            ) : (
                <></>
            )}

        </TouchableOpacity>
    )
}

export default CheckmarkComponent

const styles = StyleSheet.create({

})