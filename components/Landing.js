import { View, Text, Video, StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Landing() {
    return (
        <View>
            <Video
                source={{ uri: './../assets/videos/85799-590014925.mp4' }}
                // style={styles.video}
                // controls={true} 
                // resizeMode="contain" 
                style={{
                    width:wp('100%'),
                    height:hp(450)
                }}
            />
            <View style={styles.container}>
                <Text style={{
                    fontSize:30,
                    fontFamily:'outfit-bold',
                    textAlign:'center',
                    marginTop:10
                }}>
                    SyncUp
                </Text>

                <Text style={{
                    fontSize:17,
                    fontFamily:'outfit',
                    textAlign:'center',
                    color:'#7d7d7d'
                }}>
                    Connect instantly with friends, share your story, and discover a vibrant community. Your voice, your moments, your network.
                </Text>

                <View style={styles.button}>
                <Text style={{
                    fontSize:17,
                    fontFamily:'outfit',
                    textAlign:'center',
                    marginTop:10,
                    color:'#fff'
                }}>
                    Get Started
                </Text>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#fff',
      marginTop: -20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      height: hp('100%'),
      padding:25
    },
    button: {
      backgroundColor:'linear-gradient(90deg, rgba(5,4,27,1) 0%, rgba(2,1,11,1) 20%, rgba(169,41,185,1) 40%, rgba(136,39,117,1) 60%, rgba(31,5,16,1) 80%, rgba(5,2,16,1) 100%)',
      marginTop: '20%',
      borderRadius:99,
      padding:15
    },
  });