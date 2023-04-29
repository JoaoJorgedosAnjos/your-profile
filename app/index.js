import { StyleSheet, Text, View, StatusBar, TextInput, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#006557" barStyle="light-content" />
            <View style={styles.header}>
                <TextInput style={styles.input}
                    placeholder="Buscar capacitações, profissionais..."
                />
                <Image
                    source={require('../assets/img/Vector.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.profile}>
                <View style={styles.profileAlert}>
                    <Feather name="alert-triangle" size={25} color="#A58848" />
                    <Text style={{ color: '#A58848' }}><Text style={styles.textBold}>Completar perfil:</Text> Preencha suas {"\n"}informações para encontrar pacientes.</Text>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={{ fontSize: 18 }}>Seu perfil</Text>
                    <View style={styles.profileInfos}>
                        <View style={styles.userImg}>
                            <Image style={styles.img}
                                source={require('../assets/img/user.png')}
                            />
                        </View>
                        <View style={{ gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Carolina Magalhães</Text>
                            <Text style={{ fontSize: 14 }}>São Paulo - SP</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <FontAwesome name="star" size={20} color="#ccc" />
                                <FontAwesome name="star" size={20} color="#ccc" />
                                <FontAwesome name="star" size={20} color="#ccc" />
                                <FontAwesome name="star" size={20} color="#ccc" />
                                <FontAwesome name="star" size={20} color="#ccc" />
                                <Text> (0)</Text>
                            </View>
                        </View>
                        <Text style={styles.profileBorder}></Text>
                    </View>
                </View>
            </View>
            <View style={styles.profileBorder}></View>
            <View style={styles.professionalTraining}>
                <Link href='./complete-profile' >
                    <View style={styles.completeProfile}>
                        <Text style={styles.completeProfile}>Completar perfil
                        </Text>
                        <Feather name="arrow-right" size={25} color="#07689F" />
                    </View>
                </Link>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 17 }}>Capacitações profissionais</Text>
                    <Link href='./show-more' style={{ fontSize: 14, fontWeight: '600', color: '#07689F' }}>Ver mais</Link>
                </View>
                <View style={styles.footerImg}>
                    <Link href='./show-more'>
                        <View>
                            <Image
                                source={require('../assets/img/Image1.png')} />
                            <Text style={{ backgroundColor: '#D48A04', width: 89, ...styles.footerTittleImg }}>Parceiros</Text>
                            <Text style={styles.footerInfoImg}>Diabetes: alimentos{"\n"}para evitar.</Text>
                        </View>
                    </Link>
                    <Link href='./show-more'>
                        <View>
                            <Image                            
                                source={require('../assets/img/Image2.png')} />
                            <Text style={{ backgroundColor: '#3B2D72', width: 119, ...styles.footerTittleImg }}>Capacitações</Text>
                            <Text style={styles.footerInfoImg}>Como ministrar{"\n"}doses</Text>
                        </View>
                    </Link>

                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#006557',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
    },
    input: {
        height: 40,
        width: 320,
        borderRadius: 10,
        backgroundColor: '#FFF',
        color: '#424F4D',
        fontSize: 14,
        paddingLeft: 51,
        marginTop: 15
    },
    image: {
        width: 15,
        height: 15,
        top: 66,
        left: 58,
        position: 'absolute'
    },
    profile: {
        height: 350,
        alignItems: 'center',
        height: 300
    },
    profileBorder: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: -25,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    profileAlert: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A58848',
        height: 70,
        width: 360,
        alignItems: 'center',
        backgroundColor: '#F8F4C4',
        flexDirection: 'row',
        gap: 15,
        paddingLeft: 20,
    },
    textBold: {
        fontWeight: 'bold'
    },
    profileInfo: {
        width: 360,
        gap: 20
    },
    profileInfos: {
        flexDirection: 'row',
        gap: 15,
    },
    userImg: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: '#ccc',
        borderRadius: 50,
        width: 71,
        height: 71,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 35,
        height: 35
    },
    professionalTraining: {
        alignItems: 'center',
        gap: 10
    },
    completeProfile: {
        alignItems: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#07689F',
        flexDirection: 'row',
        gap: 12,
    },
    footer: {
        flexDirection: 'row',
        gap: 70,
        marginTop: 10,
        alignItems:'center'
    },
    footerImg: {
        flexDirection: 'row',
        gap: 20,
        borderRadius: 5,
        height:150,
    },
    footerTittleImg: {
        fontSize: 14,
        fontWeight: '500',
        height: 22,
        borderRadius: 5,
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        top: 10,
        left: 12
    },
    footerInfoImg: {
        fontSize: 14,
        fontWeight: '600',
        width: 156,
        height: 38,
        color: 'white',
        position: 'absolute',
        bottom: 9,
        left: 12
    }
});