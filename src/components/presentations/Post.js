import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import config from '../../config';




class Post extends Component{

    constructor (){
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }
     
    likeToggled(){
        this.setState({
            liked: this.state.liked
        })
    }

    render (){

            const imageHeight = this.state.screenWidth * 1.1;
            const imageUri = "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?cs=srgb&dl=adorable-animal-bernedoodle-1458916.jpg&fm=jpg" + "=s" + this.state.screenWidth;
            const heartIconColor = !this.state.liked ? null : "rgb(252,61,57)";

        return (
            <View style = {{flex: 1, width: 100 + "%"}}>
                <View style = {style.userBar}>
                    <View style = {style.contenedorFotoDePerfil}>
                        <Image
                            style = {style.fotoDePerfil}
                            source = {{
                                 uri: 
                                    "https://lh3.googleusercontent.com/36MYaIMoyugmb6-Pozlup2ZJk48u5phfKbwL8Kiv0RtuTMbuOeScySkaG_knVJKLtGVYPdNZN8vXqbzWhgQVbMQivg"
                                    }}
                                />
                                        <Text style = {style.nombreDeUsuario}>Raul Puigbo</Text>
                                    </View>
                                <View style = {{ alignItems: "center"}}>
                                    <Text style = {{fontSize : 30}}>...</Text>
                                </View>
                </View>
                <TouchableOpacity
                    activeOpacity= {0.5}    
                    onPress = {()  => {
                        this.likeToggled();
                    }}  
                >
                        <Image 
                        style = {{
                            width: this.state.screenWidth,
                            height: imageHeight,
                            }}
                        source = {{uri: imageUri }}
                        />
                </TouchableOpacity>
                        <View style = { style.iconBar}>
                            <Image style = {[style.icons, {tintColor: heartIconColor}]} source = {config.images.heartIcon}/>
                            <Image style = {style.icons} source = {config.images.chatIcon}/>
                            <Image style = {style.icons} source = {config.images.shareIcon}/>
                        </View>
                        <View style={style.commentBar}>
                            <Image style = {{height: 15, width:15, marginRight: 5, marginLeft: 5,}} source = {config.images.heartIcon}/>
                            <Text>128 likes</Text>
                        </View>
                </View>
        );
    }
}

const style = StyleSheet.create({
    
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection : "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    fotoDePerfil: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    contenedorFotoDePerfil: {
        flexDirection : "row",
        alignItems: "center",
    },
    nombreDeUsuario: {
        marginLeft: 10,
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems : "center",
    },

    icons: {
        height: 32,
        width: 32,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 2,

    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems: "center",

    }

});

export default Post;