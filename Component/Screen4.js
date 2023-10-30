import { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
function Screen3({ navigation }) {
    return (
        <View style={{ width: '100%', backgroundColor: '#FFFFFF' }}>
            <View style={{ marginHorizontal: 'auto', width: 350 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{ width: 44, height: 44 }} source={require('../assets/iconArrow.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, fontWeight: 700, marginHorizontal: 60 }}>Your Orders</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 24, height: 24 }} source={require('../assets/iconSearch.png')} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: 347,
                        height: 100,
                        borderRadius: 6,
                        backgroundColor: '#00BDD6',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>
                            CAFE DELIVERY
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Order #18</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginRight: 20 }}>$5</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen1', alert('Order Success'))}
                    style={{ width: 347, height: 44, borderRadius: 6, backgroundColor: '#EFB034', marginTop: 10 }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 400, color: '#FFFFFF', margin: 'auto' }}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen3;
