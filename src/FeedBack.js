import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import categories from "../data.json";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FeedBack = ({ route }) => {

  const [data, setData] = useState([]);
  const [categorie, setCategorie] = useState([]);
  // console.log("categorie", categorie);
  const refreshMe = () => {
    setRefresh(!refresh);
  }
  const { idnum } = route.params;
  // console.log('idnum:', idnum);
  const [refresh, setRefresh] = useState(false);

  const [isRowDirection, setIsRowDirection] = useState(false);
  const [key, setKey] = useState('row');
  const handlePress = () => {
    setIsRowDirection(!isRowDirection);
    setKey(key === 'row' ? 'column' : 'row');
  };

  const overAlldata = () => {
    const filteredData = data.filter(item => item.id == idnum);
    setCategorie(filteredData);
    setRefresh(true)
  };




  const ItemWidth = isRowDirection ? '45%' : '100%';
  const ItemHight = isRowDirection ? 190 : 130;
  const margin = isRowDirection ? 10 : 10;
  // const ItemImageWidth = isRowDirection ? '35%' : '50%';
  // const ItemImageHeight = isRowDirection ? '70%' : '80%';

  useEffect(() => {
    if (data.length > 0) {
      overAlldata();
    }
  }, [data, idnum]);


  useEffect(() => {
    setData(categories.categories);
    refreshMe();
  }, [categories.categories]);

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, width: '100%' }}>
      <View style={{ backgroundColor: '#0261F6' }}><Text style={styles.container}>FeedBack</Text></View>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={handlePress}>
          {isRowDirection ? (
            <FontAwesome5 name="list-ul" size={20} color="#000" />
          ) : (
            <FontAwesome5 name="th" size={20} color="#000" />
          )}
        </TouchableOpacity>
      </View>


      <FlatList
        refreshing={refresh}
        numColumns={isRowDirection ? 2 : 1}
        style={{ backgroundColor: '#909E86' }}
        data={categorie}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            {/* <Text style={styles.container}>{item.name}</Text> */}
            <FlatList
              // key={key}
              data={item.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item: innerItem, index: innerIndex }) => (
                < View
                  style={
                    [
                      styles.itemContainer,
                      { backgroundColor: '#fff' },
                      { height: ItemHight },
                      { width: ItemWidth },
                      { margin: margin },
                      // isRowDirection ? styles.rowDirection : styles.columnDirection,
                    ]}
                >
                  <Text style={isRowDirection ? styles.itemText : styles.item2Text} >{innerItem.name}</Text>

                  <Text style={isRowDirection ? styles.itemText : styles.item2Text} > Rs.{innerItem.price}</Text>
                </View >

              )}
            />
          </View>
        )}
      />
    </SafeAreaView >
  )
}

export default FeedBack

const styles = StyleSheet.create({

  container: {
    color: "blue",
    fontSize: 30,
    textAlign: "center"
  },
  itemContainer: {
    elevation: 20,
    borderRadius: 10,
    margin: 10
  },
  header: {
    flex: 1,
    flexDirection: 'column',
  },
  header1: {
    flex: 1,
    flexDirection: 'row',
  },
  imageheader: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image2header: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2View: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item2Text: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 10,
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  item2Price: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemADD: {
    padding: 4,
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
  },
  item2add: {
    padding: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  columnDirection: {
    flexDirection: 'column',
  },
})
