
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button({name,navigat}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.Login} onPress={navigat}>
                <Text style={{ color: 'white', fontSize: 20,fontWeight:'bold'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        marginTop: 20,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Login: {
        backgroundColor: 'transparent',
        borderWidth:2,
        borderColor:'white',
        height: 60,
        width: '80%',
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,

        
        
    }
});
