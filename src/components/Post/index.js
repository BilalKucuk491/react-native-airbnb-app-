import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://a0.muscache.com/im/pictures/f46ffc9a-cd8c-4206-aec3-1e345cbca43e.jpg?im_w=1200',
        }}
      />
      {/* bed and bedroom */}

      <Text style={styles.homeDescTitle}>
        2 guests &#183; 1 bedroom &#183; 1 bed &#183; 1 bath
      </Text>


      {/* types and description */}
      <Text style={styles.descriptionText} numberOfLines={2}>
        The newly built Studio "evaton marion" is located on Stilida Hill, 5km
        from Naxos Town and just minutes from the settlement and the famous
        beach of Agios Prokopios, which attracts visitors every summer for its
        deep blue waters and like sand grains on her sand. The studios are
        remote from the bustling areas, surrounded by a beautiful garden where
        one can enjoy panoramic views of the Aegean Sea with views of the nearby
        islands, Chora and Mount Zas with some of its mountain villages.
      </Text>

      {/* old price / new price and day type */}

       
      <Text style={styles.pricesText}>
      <Text style={styles.oldPriceText}>$215</Text>
      <Text style={styles.priceText}>  $119 </Text>
      / night
      </Text>
     

      {/* total price */}

      <Text style={styles.totalPriceText}>$573 total</Text>
    </View>
  );
};

export default Post;
