
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import datas from '../data.json';
import colors from './constants/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const CartScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setData(datas.categories);
    }, []);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.WHITE,
                elevation: 20,
            }}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}>
                        <Icon name="chevron-back-outline" color="#fff" size={25} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: '900',
                            color: colors.WHITE,
                        }}>
                        Cart
                    </Text>
                </View>
                <View></View>
            </View>
            <ScrollView
                style={{
                    backgroundColor: colors.BLACK_LIGHT_TWICE,
                }}>
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.allItems}>
                                <View style={styles.cartItems}>
                                    <View style={{ flex: 0.4 }}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={{ width: 'auto', height: 100, borderRadius: 10 }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.7, marginLeft: 15 }}>
                                        <Text
                                            style={{
                                                color: colors.BLACK,
                                                fontSize: 20,
                                                fontWeight: '200',
                                                fontWeight: '700',
                                            }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <AntDesign name="delete" color="#bcbcbc" size={20} />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={styles.qtyItem}>
                                        <Text>Qty:</Text>
                                    </View>
                                    <View style={{ flex: 4, padding: 3, margin: 3, marginLeft: 8 }}>
                                        <Text style={{ color: 'green' }}>Delivery by</Text>
                                    </View>
                                    <View style={{ padding: 3, margin: 3 }}>
                                        <Text>|</Text>
                                    </View>
                                    <View style={{ flex: 4, padding: 3, margin: 3 }}>
                                        <Text style={{ color: 'green' }}>Shipping fees</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.couponItem}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <View style={{ paddingTop: 2 }}>
                            <Icon1
                                name="ticket-confirmation-outline"
                                color="#bcbcbc"
                                size={25}
                            />
                        </View>
                        <Text
                            style={{
                                paddingLeft: 5,
                                paddingTop: 4,
                                fontWeight: '700',
                                fontSize: 15,
                            }}>
                            Apply coupon
                        </Text>
                        <View style={{ padding: 3, margin: 3 }}>
                            <Text>|</Text>
                        </View>
                        <TextInput
                            style={{
                                height: 35,
                                color: 'black',
                            }}
                            // editable={this.state.editemail}
                            color="#545862"
                            placeholder="eg:KHBJHB4654HVG"
                            placeholderTextColor="#bcbcbc"></TextInput>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <AntDesign name="questioncircle" color="#bcbcbc" size={15} />
                    </View>
                </View>
                <View style={styles.priceDetails}>
                    <View
                        style={{
                            margin: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View>
                            <Text
                                style={{
                                    color: colors.BLACK,
                                    fontWeight: '700',
                                    fontSize: 19,
                                }}>
                                Price Details
                            </Text>
                            <Text>{`(3items on cart)`}</Text>
                        </View>

                        <AntDesign name="questioncircle" color="#bcbcbc" size={15} />
                    </View>
                    <View
                        style={{
                            borderBottomColor: colors.BLACK,
                            borderBottomWidth: 0.7,
                        }}
                    />
                    <View
                        style={{
                            margin: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flex: 0.4 }}>
                            <Text>Price</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text>{`\u20B9${150}`}</Text>
                        </View>
                        <View></View>
                    </View>
                    <View
                        style={{
                            margin: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flex: 0.4 }}>
                            <Text>Delivery </Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={{ color: 'green' }}>{`\u20B9${10}`}</Text>
                        </View>
                        <View></View>
                    </View>
                    <View
                        style={{
                            margin: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flex: 0.4 }}>
                            <Text>Shipping Fee</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text>{`\u20B9${20}`}</Text>
                        </View>
                        <View></View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: colors.BLACK,
                            borderBottomWidth: 0.7,
                        }}
                    />
                    <View
                        style={{
                            margin: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flex: 0.4 }}>
                            <Text>Total Amount</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={{ color: 'green' }}>{`\u20B9${200}`}</Text>
                        </View>
                        <View></View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.placeOrder}>
                <View style={{ flex: 0.4 }}>
                    <Text>Total Amount</Text>
                    <Text>{`\u20B9${300}`}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        flex: 0.5,
                        backgroundColor: colors.UI_COLOR,
                        marginRight: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}>
                    <Text style={{ color: colors.WHITE }}>Placed Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.UI_COLOR,
        flexDirection: 'row',
        padding: 12,
    },
    backButton: {
        backgroundColor: colors.UI_COLOR,
        marginRight: 40,
        borderRadius: 50,
        elevation: 10,
    },
    allItems: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.WHITE,
        padding: 10,
        elevation: 1,
    },
    cartItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    qtyItem: {
        // flex: 2,
        paddingLeft: 12,
        paddingRight: 13,
        margin: 3,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.BLACK,
        borderRadius: 4,
    },
    couponItem: {
        flex: 0.1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.BLACK_LIGHT,
        borderRadius: 8,
        padding: 5,
        backgroundColor: colors.WHITE,
    },
    priceDetails: {
        flex: 0.2,
        margin: 10,
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 10,
        elevation: 10,
    },
    placeOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        height: 50,
    },
});
