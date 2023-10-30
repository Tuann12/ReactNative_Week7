import { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function Screen2({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f4af99e8bd3be29e02ddb.mockapi.io/ReactNative_Week7')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <View style={{ width: '100%' }}>
            <View style={{ alignItems: 'center' }}>
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
                    <Text style={{ fontSize: 24, fontWeight: 700, marginHorizontal: 60 }}>Shops Near Me</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 24, height: 24 }} source={require('../assets/iconSearch.png')} />
                    </TouchableOpacity>
                </View>
                {data.map((item) => (
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Screen3')}
                            style={{ width: 347, height: 200, backgroundColor: '#FFFFFF' }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 347, height: 114, borderRadius: 6, resizeMode: 'cover' }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#F3F4F6',
                                    margin: 5,
                                    paddingVertical: 3,
                                }}
                            >
                                {item.status == true ? (
                                    <Image
                                        style={{ width: 19, height: 14, resizeMode: 'contain' }}
                                        source={require('../assets/iconCheck.png')}
                                    />
                                ) : (
                                    <Image
                                        style={{ width: 19, height: 14, resizeMode: 'contain' }}
                                        source={require('../assets/iconClock.png')}
                                    />
                                )}
                                {item.status == true ? (
                                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#1DD75B' }}>
                                        Accepting Orders
                                    </Text>
                                ) : (
                                    <Text style={{ fontSize: 14, fontWeight: 400, color: '#DE3B40' }}>
                                        Tempory Unavailable
                                    </Text>
                                )}
                                <Image
                                    style={{ width: 19, height: 14, resizeMode: 'contain' }}
                                    source={require('../assets/iconClockWatcher.png')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: 400, color: '#DE3B40' }}>{item.time}</Text>
                                <Image
                                    style={{ width: 19, height: 14, resizeMode: 'contain' }}
                                    source={require('../assets/iconLocation.png')}
                                />
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: 700, color: '#171A1F' }}>{item.title}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 700, color: '#171A1F' }}>{item.address}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default Screen2;
