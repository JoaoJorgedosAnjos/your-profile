import { useRouter } from 'expo-router';
import {Text, View, Button } from 'react-native';

const showmore = () =>{
    const router = useRouter();
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center', gap:20}}> 
            <Text>Mostrar mais</Text>
            <Button onPress={() => router.back()} title='Voltar para página inicial'/>
        </View>
    )
}
export default showmore;