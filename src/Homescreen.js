import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { SliderBox } from "react-native-image-slider-box";
import categories from "../data.json";

import { ROUTES } from '../constants';



function HomePage(props) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  // console.log("ddaaa", data);
  const [refresh, setRefresh] = useState(false);
  const [isRowDirection, setIsRowDirection] = useState(false);
  const [key, setKey] = useState('row');

  const [customer, setCustomer] = useState([]);
  // console.log("dataaaa", categories.categories);
  const handlePress = () => {
    setIsRowDirection(!isRowDirection);
    setKey(key === 'row' ? 'column' : 'row');
  };



  // const handlechange = (id) => {
  //   navigation.navigate( , { idnum: id });
  // };

  const Images = [
    require('../assets/images/img1.jpg'), // Local image
    require('../assets/images/img3.jpg'), // Local image
    require('../assets/images/img5.jpg'), // Local image
  ];
  // const ItemWidth = isRowDirection ? '45%' : '100%';
  // const ItemHight = isRowDirection ? 190 : 130;
  // const margin = isRowDirection ? 10 : 10;
  // const ItemImageWidth = isRowDirection ? '35%' : '50%';
  // const ItemImageHeight = isRowDirection ? '70%' : '80%';
  // const renderItem = ({ item, index }) => (
  //   // console.log("ff", item)
  //   <View
  //     style={[
  //       styles.itemContainer,
  //       { backgroundColor: '#fff' },
  //       { height: ItemHight },
  //       { width: ItemWidth },
  //       { margin: margin },

  //       isRowDirection ? styles.rowDirection : styles.columnDirection,
  //     ]}>
  //     <View style={isRowDirection ? styles.header : styles.header1}>
  //       <View style={isRowDirection ? styles.imageheader : styles.image2header}>
  //         {item.image && (
  //           <Image
  //             source={{ uri: item.image }}
  //             style={{ width: ItemImageWidth, height: ItemImageHeight }}
  //           />
  //         )}
  //       </View>

  //       <View style={isRowDirection ? styles.itemView : styles.item2View}>
  //         <Text style={isRowDirection ? styles.itemText : styles.item2Text}>
  //           {item.name}
  //         </Text>
  //         <Text style={isRowDirection ? styles.itemPrice : styles.item2Price}>
  //           Rs.{item.price}
  //         </Text>

  //         <View style={{ backgroundColor: '#90ef', borderRadius: 6 }}>
  //           <TouchableOpacity onPress={handlechange}>
  //             <Text style={isRowDirection ? styles.itemADD : styles.item2add}>
  //               ADD
  //             </Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  const OverAlldata = async () => {
    const response = await fetch(
      `https://fakestoreapiserver.reactbd.com/amazonproducts`,
    );
    const data = await response.json();
    setCustomer(data);
  };

  useEffect(() => {
    OverAlldata();
  }, []);
  useEffect(() => {
    setData(categories.categories)
  }, [categories]);

  return (
    <SafeAreaView style={{ backgroundColor: '#F6F0EE', flex: 1, width: '100%' }}>
      <View
        style={{
          // flex:1,
          flexDirection: 'row',
          backgroundColor: '#0261F6',
          // height: '8%',
          paddingTop: 10,
          paddingBottom: 10

        }}>
        <View
          style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
          <Feather
            name="menu"
            size={25}
            color="#FFF"
            onPress={() => props.navigation.openDrawer()}
          // style={{flex: 1, backgroundColor: 'red'}}
          />
        </View>
        <View
          style={{
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
            V MART DIGITAL
          </Text>
        </View>
        <View
          style={{
            flex: 0.1,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Icon name="cart" color="#fff" size={28} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0261F6',
            flexDirection: 'row',
            height: 50,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.9,
              flexDirection: 'row',
              // backgroundColor: '#fff',
              height: 40,
              // borderRadius: 8,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              marginLeft: 4,
            }}>
            <View style={{ flex: 0.9 }}>
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  color: '#000',
                  // borderWidth:2,
                  padding: 12,
                }}
                // autoFocus={true}
                placeholderTextColor="#000"
                placeholder={'Search Our Products'}
              />
            </View>
            <View
              style={{
                flex: 0.1,
                backgroundColor: 'red',
                padding: 6,
                paddingTop: 9,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <FontAwesome5 name="search" color="#fff" size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.2, marginTop: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={handlePress}>
              {isRowDirection ? (
                <FontAwesome5 name="list-ul" size={20} color="#fff" />
              ) : (
                <FontAwesome5 name="th" size={20} color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, height: '50%' }}>
          <SliderBox
            images={Images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            style={{ borderRadius: 10, width: '90%', margin: 20 }}
            // dotColor="#FFEE58"
            //inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            autoplayInterval={3000}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            dotStyle={{
              display: 'none',
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>categories</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refresh}
          horizontal={true}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => handlechange(item.id)}>
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', margin: 10 }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
      <View style={{ flex: 8 }}>
        <FlatList
          data={customer}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refresh}
          horizontal={true}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer1}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.category}>{item.category}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: 50,
    height: 70,
    backgroundColor: '#2196F3',
    margin: 10,
    borderRadius: 24
  },
  itemContainer1: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    marginHorizontal: 5,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
    width: 370,
    height: '70%',
  },
  imageContainer: {
    flex: 0.3,
  },
  image: {
    width: '85%',
    height: '70%',
    resizeMode: 'cover',
    marginLeft: 20,
    marginTop: 20
  },
  textContainer: {
    flex: 0.7,
    // justifyContent: 'center',
  },
  category: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,

  },
});
// const styles = StyleSheet.create({
//   itemContainer: {
//     // elevation: 20,
//     borderRadius: 10,
//     flexDirection: "row"
//   },
//   header: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   header1: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   imageheader: {
//     flex: 0.6,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   image2header: {
//     flex: 0.4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemView: {
//     flex: 0.4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item2View: {
//     flex: 0.6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemText: {
//     fontSize: 13,
//     color: '#000',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   item2Text: {
//     fontSize: 25,
//     color: '#000',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 10,
//     color: '#000',
//     textAlign: 'left',
//     fontWeight: 'bold',
//   },
//   item2Price: {
//     fontSize: 15,
//     color: '#000',
//     textAlign: 'left',
//     fontWeight: 'bold',
//   },
//   itemADD: {
//     padding: 4,
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '900',
//   },
//   item2add: {
//     padding: 5,
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '900',
//   },
//   rowDirection: {
//     flexDirection: 'row',
//   },
//   columnDirection: {
//     flexDirection: 'column',
//   },
// });

export default HomePage;
