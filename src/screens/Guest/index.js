import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const navigation = useNavigation();

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const adultsHandlerDecrease = () => {
    adults >= 1
      ? setAdults(adults - 1)
      : console.log('error:adult value is not negative');
  };
  const adultsHandlerIncrease = () => {
    setAdults(adults + 1);
  };

  const childrenHandlerDecrease = () => {
    children >= 1
      ? setChildren(children - 1)
      : console.log('error:adult value is not negative');
  };
  const childrenHandlerIncrease = () => {
    setChildren(children + 1);
  };

  const infantsHandlerDecrease = () => {
    infants >= 1
      ? setInfants(infants - 1)
      : console.log('error:adult value is not negative');
  };
  const infantsHandlerIncrease = () => {
    setInfants(infants + 1);
  };

  const Section = ({
    title,
    subTitle,
    HandlerIncrease,
    HandlerDecrease,
    value,
  }) => {
    return (
      <View style={styles.row}>
        {/* titles */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            {title}
          </Text>
          <Text style={{color: '#8d8d8d'}}>{subTitle}</Text>
        </View>
        {/* buttons with value */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* - */}
          <Pressable onPress={() => HandlerDecrease()} style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>

          {/* value */}
          <Text style={{marginHorizontal: 20, fontSize: 16, color: 'black'}}>
            {value}
          </Text>

          {/* + */}

          <Pressable onPress={() => HandlerIncrease()} style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <Section
          title="Adults"
          subTitle="Ages 13 or above"
          HandlerIncrease={adultsHandlerIncrease}
          HandlerDecrease={adultsHandlerDecrease}
          value={adults}
        />
        <Section
          title="Children"
          subTitle="Ages 2-12"
          HandlerIncrease={childrenHandlerIncrease}
          HandlerDecrease={childrenHandlerDecrease}
          value={children}
        />
        <Section
          title="Infants"
          subTitle="Under 2"
          HandlerIncrease={infantsHandlerIncrease}
          HandlerDecrease={infantsHandlerDecrease}
          value={infants}
        />
      </View>
      <View>
        <Pressable
          //burada explore yerine search sayfası koyulmalı
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
