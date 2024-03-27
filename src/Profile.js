import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.4, backgroundColor: '#e6e1da' }}>
                <View>
                    <Text style={{ color: '#000', fontWeight: 'bold', margin: 20, fontSize: 20 }}>Profile</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image source={require('../assets/images/falcon.jpg')} style={{ height: 100, borderRadius: 80 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: "#000", height: 40, width: '45%', marginVertical: 10 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', textAlign: 'center' }}> Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#000", height: 40, width: '45%', marginVertical: 10 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', textAlign: 'center' }}>My order</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: "#000", height: 40, width: '45%', marginVertical: 10 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', textAlign: 'center' }}>Payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#000", height: 40, width: '45%', marginVertical: 10 }}>
                        <Text style={{ color: '#ffff', fontWeight: 'bold', textAlign: 'center' }}>My wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
