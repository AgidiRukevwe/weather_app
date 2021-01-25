/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './style';

import {
  IconButton,
  Provider as PaperProvider,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import City from './src/city/City';
import Temp_info from './src/Temp_info/Temp_info';
import Other_temp_info from './src/other_temp_info/Other_temp_info';
import Weekdays from './src/weekday/Weekdays';

import fetchCountries from './src/fetchCountries';
import style from './style';

const App = () => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState(null);
  const [data, setData] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetchCountries(input);
    setData(cities);
  }, [input]);

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=796f3b27a0b3884302046bcd8b0d940b`;

    const fetchData = async () => {
      await fetch(url)
        .then(async (res) => {
          const response = await res.json();

          setWeather(response);
          setTimeout(() => {
            console.log(weather);
          }, 2000);
        })
        .catch((err) => console.log(err));
    };

    query && fetchData();
    setQuery(null);
  }, [query]);
  return (
    <>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.semi_circle}></View>

            {/* app_bar */}
            <View style={styles.app_bar}>
              <Icon name="menu" size={20} color="#333" />

              <Icon
                name="search"
                style={{padding: 20}}
                size={20}
                color="#333"
                onPress={() => setSearch(!search)}
              />
            </View>
            <View style={styles.input_container}>
              {search && (
                <View style={styles.input_sub_container}>
                  <TextInput
                    autoFocus={true}
                    keyExtractor={(item) => item.geonameid}
                    style={styles.input}
                    placeholder="search"
                    onChangeText={(e) => setInput(e)}
                  />

                  {data && (
                    <FlatList
                      style={styles.list}
                      data={data}
                      keyExtractor={(item) => `${item.geonameid}`}
                      renderItem={({item}) => (
                        <Card
                          style={{marginTop: 10}}
                          key={item.name}
                          onPress={() => {
                            setQuery(item.name);
                            setInput('');
                            setSearch(!search);
                          }}>
                          <Card.Content>
                            <Paragraph>
                              {item.name}, {item.country}
                            </Paragraph>
                          </Card.Content>
                        </Card>
                      )}
                    />
                  )}
                </View>
              )}
            </View>

            {/* city name */}

            <City city={weather?.name} />

            <Temp_info weather={weather?.main} />
            <Other_temp_info />
            <Weekdays />
          </View>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default App;
