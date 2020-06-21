import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Pilih Dokter Anak" type="dark" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Junnie" desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Junnie" desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Junnie" desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Junnie" desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor1} name="Alexander Junnie" desc="Wanita" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
