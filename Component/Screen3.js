import { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function Screen4({ navigation }) {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount((prevCount) => prevCount + 1);
    };
    console.log('Tang=>', count);

    const handleDelete = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        } else {
            setCount((prevCount) => (prevCount = 0));
        }
    };
    console.log('Giam=>', count);

    useEffect(() => {
        fetch('https://653f75499e8bd3be29e09ced.mockapi.io/listCoffee')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

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
                    <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                        <Image style={{ width: 44, height: 44 }} source={require('../assets/iconArrow.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, fontWeight: 700, marginHorizontal: 60 }}>Drink</Text>
                    <TouchableOpacity>
                        <Image style={{ width: 24, height: 24 }} source={require('../assets/iconSearch.png')} />
                    </TouchableOpacity>
                </View>

                {data.map((item) => (
                    <View style={{ marginVertical: 10 }}>
                        <TouchableOpacity
                            style={{
                                width: 350,
                                height: 64,
                                borderWidth: 1,
                                borderColor: '#BCC1CA',
                                borderRadius: 4,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Image
                                style={{ width: 60, height: 60, resizeMode: 'cover' }}
                                source={{ uri: item.image }}
                            />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 500, color: '#171A1F' }}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 12, height: 12, tintColor: '#9095A0', marginRight: 5 }}
                                        source={require('../assets/Frame.png')}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 400, color: '#565E6C' }}>
                                        ${item.price}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 100, position: 'relative' }}>
                                <Text
                                    style={{ position: 'absolute', fontSize: 14, fontWeight: 400, top: 0, right: 55 }}
                                >
                                    {count}
                                </Text>
                                <TouchableOpacity onPress={handleDelete}>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        source={require('../assets/iconDelete.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAdd}>
                                    <Image
                                        style={{ width: 20, height: 20, marginLeft: 40, marginRight: 20 }}
                                        source={require('../assets/iconAdd.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen4')}
                    style={{ width: 347, height: 44, borderRadius: 6, backgroundColor: '#EFB034', marginTop: 10 }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 400, color: '#FFFFFF', margin: 'auto' }}>GO TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen4;
