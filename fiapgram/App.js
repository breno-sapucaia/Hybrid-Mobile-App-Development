import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

class App extends React.Component {

  render() {
    return (
      <>
        <View style={styles.header}>
          <Image
            style={styles.imgProfile}
            source={{ uri: 'https://i.imgur.com/ZrDq6UQ.jpg' }} />
          <Text style={styles.username}>
            sapu.io
        </Text>
        </View>
        <Image
          style={styles.picture}
          source={{ uri: 'https://i.imgur.com/ZrDq6UQ.jpg' }} />
        <Text style={styles.username}></Text>
        <View style={styles.container}>
          <View style={styles.likeContainer}>
            <FontAwesomeIcon
              icon={false ? solidHeart : regularHeart}
              size={28}
              style={false ? styles.heart : {}} />
            <Text style={styles.textLikes}>{'2 curtidas'}</Text>
          </View>
          <Text style={styles.legend} numberOfLines={3}>
            <Text style={styles.userPost}> sapu.io</Text>
            <Text style={styles.legend}>Landscape painted on the surface of a cut log</Text>
          </Text>
        </View>

      </>
    );
  }
}
const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  heart: {
    color: 'red'
  },
  imgProfile: {
    height: 48,
    width: 48,
    borderRadius: 50,
    marginRight: 8
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  picture: {
    display: 'flex',
    width,
    height: width
  },
  textLikes: {
    marginLeft:8
  },
  username: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'AveniNext-Regular' : 'Roboto',
  },
  userPost :{
    fontWeight: 'bold',
    marginRight: 8
  }
});


export default App;
