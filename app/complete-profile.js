import {useRouter } from 'expo-router';
import {Text, View, Button } from 'react-native';

const complete = () =>{
    const router = useRouter();
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center', gap:20}}> 
            <Text>Completar perfil</Text>
            <Button onPress={() => router.back()} title='Voltar para página inicial'/>
        </View>
    )
}
export default complete;