import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = ({post}) => {
  console.log(post);
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* bed and bedroom */}

      <Text style={styles.homeDescTitle}>
        {post.bedroom} bedroom &#183; {post.bed} bed
      </Text>

      {/* types and description */}
      <Text style={styles.descriptionText} numberOfLines={2}>
        {post.description}
      </Text>

      {/* old price / new price and day type */}

      <Text style={styles.pricesText}>
        <Text style={styles.oldPriceText}>${post.oldPrice}</Text>
        <Text style={styles.priceText}>  ${post.newPrice} </Text>/ night
      </Text>

      {/* total price */}

      <Text style={styles.totalPriceText}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
