import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILHospitalBG, DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets'
import { fonts, colors, showError } from '../../utils'
import { ListHospital } from '../../components'
import { Fire } from '../../config'

const Hospitals = () => {
    const [hospitals, setHospitals] = useState([])
    useEffect(() => {
        Fire.database().ref('hospitals/').once('value').then(res => {
            if (res.val()) {
                setHospitals(res.val())
            }
        }).catch(err => {
            showError(err.message)
        })
    }, [])
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                { hospitals.map(item => {
                    return <ListHospital key={item.id} type={item.type} name={item.name} address={item.address} pic={item.image} />
                })}
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    }
})
