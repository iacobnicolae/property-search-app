import React, {useState} from "react";
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, Linking} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from "react-redux";

const ContentPage = (props) => {
    const property = useSelector((state) => state.property.propertyView);
    let [images, floor, epc, broschure] = useState(false);
    let Images = [];
    let Floorplan = [];
    let Epc = [];
    let Brochure = [];

    property.Media.map(item => {
        if (item.TypeId === 1) {
            Images.push(property.FileUrl[1] + item.Data);
            images = true;
        }
        if (item.TypeId === 2) {
            floor = true;
            Floorplan.push(property.FileUrl[2] + item.Data);
        }
        if (item.TypeId === 3) {
            epc = true;
            Epc.push(property.FileUrl[3] + item.Data);
        }
        if (item.TypeId === 5) {
            broschure = true;
            Brochure.push(property.FileUrl[5] + item.Data);
        }

    })

    const propertyTitle = () => {
        let title = '';

        if (property.Bedrooms >= 1) {
            title += property.Bedrooms + ' bed ';
        }

        if (property.Types[0].Name !== '')
            title += property.Types[0].Name

        if (property.TransactionTypeId === 1) {
            title += ' for sale';
        } else {
            title += 'to rent';
        }

        if (property.Address.Street !== '') {
            title += ' in ' + property.Address.Street;

            if (property.Address.Town !== '') {
                title += ', ' + property.Address.Town;
            }
        } else if (property.Address.Town !== '') {
            title += ' in ' + property.Address.Town;
        }

        return title;
    }

    const image = require('../../assets/img1.jpg');

    const onPress = () => Linking.canOpenURL(Brochure[0]).then(() => {
        Linking.openURL(Brochure[0]);
    });

    return (
        <ScrollView style={styles.container}>

            {/*logo*/}
            <View style={styles.logo}>
                <Icon
                    style={{marginLeft: 10}}
                    name='angle-left' size={30} color={'#022473'}
                    onPress={() => props.navigation.goBack()}/>
                <Image source={require('../../assets/logo.png')} style={styles.image}/>
            </View>

            {/*Image*/}
            <View style={styles.img}>
                <ImageBackground source={image}>
                    <Image source={ property.FileUrl.MainPhoto + property.MainPhoto.Name } style={styles.imgbed}/>

                    <View style={styles.textimg}>
                        <Text style={styles.text}>
                            {propertyTitle()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>

            {/*icons info*/}
            <ScrollView horizontal={true} style={styles.icons}>
                <View style={styles.iconsinfo}>
                    <TouchableOpacity style={{flexDirection: "row"}}>
                        <Icon name='images' size={26} color='white'/>
                        <Text style={{color: 'white', fontSize: 20, marginLeft: 7}}>Images</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: "row"}}>
                        <Icon name='map' size={26} color='white' style={{marginLeft: 15}}/>
                        <Text style={{color: 'white', fontSize: 20, marginLeft: 7}}>Map</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: "row"}}>
                        <Icon name='images' size={26} color='white' style={{marginLeft: 15}}/>
                        <Text style={{color: 'white', fontSize: 20, marginLeft: 7}}>EPC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: "row"}}>
                        <Icon name='images' size={26} color='white' style={{marginLeft: 15}}/>
                        <Text style={{color: 'white', fontSize: 20, marginLeft: 7}}>Brochure</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/*Content*/}
            <View style={styles.contents}>

                <View style={styles.pricebg}>
                    <Text><Icon name='pound-sign'
                                size={22} color='#022473'/>
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#022473'
                    }}> {property.Price.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")}</Text>


                    {/*icon bed & bath*/}
                    <View style={{marginRight: 15, flexDirection: 'row', paddingLeft: '33%'}}>
                        <Icon name='bed' size={25}/>
                        <Text style={{marginLeft: 10, fontSize: 20}}>{property.Bedrooms}</Text>
                    </View>

                    <View style={{marginLeft: 10, flexDirection: 'row'}}>
                        <Icon name='bath' size={25}/>
                        <Text style={{marginLeft: 10, fontSize: 20}}>{property.Bathrooms}</Text>
                    </View>
                </View>

                {/*Text Content*/}
                <Text style={{fontSize: 20}}>
                    {property.Description.replace(/<(?:.|\n)*?>/gm, '')}
                </Text>
                <Text style={{fontSize: 24, marginVertical: 20}}>Property Images</Text>

                {/*{/images*!/*/}
                {(images === true)
                    ?
                    <View style={styles.gallery}>
                        {
                            Images.map((key, item) =>
                                <Image key={item}
                                       source={key}
                                       style={styles.photo}/>)
                        }
                    </View>
                    : <></>
                }
                {/*For Map*/}
                <View>
                    <Text style={{fontSize: 24, marginVertical: 20}}>Map</Text>
                </View>

                {/*EPC*/}
                {(epc === true)
                    ?
                    <View style={{marginVertical: 20}}>
                        <Text style={{fontSize: 24, marginVertical: 20}}>EPC</Text>
                        <ImageBackground source={image}>
                        {
                            Epc.map((key, item) =>
                                <Image key={item}
                                       source={key}
                                       style={{width: '100%', height: 250}}/>)
                        }
                            </ImageBackground>
                    </View>
                    : <></>
                }

                {(floor === true)
                    ?
                    <View style={{marginVertical: 20}}>
                        <Text style={{fontSize: 24, marginVertical: 20}}>Floorplan</Text>
                        {
                            Floorplan.map((key, item) =>
                                <Image key={item}
                                       source={key}
                                       style={{width: '100%', height: 250}}/>)
                        }
                    </View>
                    : <></>
                }

                {/*Download Brochure*/}
                {
                    (broschure === true)
                        ?
                        <>
                            <Text style={{fontSize: 24,}}>Brochure</Text>
                            <TouchableOpacity style={styles.btnBrochure} onPress={onPress}>
                                <Icon name='download' size={25} color='white'/>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                        marginVertical: 15,
                                        marginLeft: 15
                                    }}
                                >
                                    Download Brochure
                                </Text>
                            </TouchableOpacity>
                        </>
                        : <></>
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    contents: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20
    },
    logo: {
        marginTop: 40,
        width: '100%',
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        marginHorizontal: 20
    },
    img: {
        width: '100%',
        height: 230
    },
    imgbed: {
        backgroundColor: 'blue',
        width: '100%',
        height: 230,
        opacity: 0.5
    },
    textimg: {
        position: "absolute",
        top: 0,
        left: 20,
        right: 20,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: 'white'
    },
    icons: {
        backgroundColor: 'blue',
    },
    iconsinfo: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
    },
    pricebg: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    gallery: {},
    photo: {
        width: '100%',
        height: 200,
        marginBottom: '5%'
    },
    photoMedium: {
        width: '45%',
        height: 120,
        marginBottom: '5%'
    },
    btnBrochure: {
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 50,
        marginVertical: 20
    }

})

export default ContentPage;