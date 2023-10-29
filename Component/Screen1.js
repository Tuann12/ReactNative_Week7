import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function Screen1({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://653f4af99e8bd3be29e02ddb.mockapi.io/Screen1')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 700, marginTop: 60 }}>Welcome To Cafe World</Text>
                {data.map((item) => (
                    <View style={{ marginTop: 60 }}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 200, height: 62, borderRadius: 6, resizeMode: 'cover' }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen2')}
                    style={{ width: 312, height: 50, borderRadius: 6, backgroundColor: '#00BDD6', marginTop: 70 }}
                >
                    <Text
                        style={{ fontSize: 14, height: 400, color: 'white', marginHorizontal: 'auto', marginTop: 15 }}
                    >
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen1;
