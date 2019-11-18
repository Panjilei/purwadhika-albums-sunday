import React, {Component} from  'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';

import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const css = StyleSheet.create({
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imagestyle: {
        height: 300,
        flex: 1
    }
})

class AlbumDetail extends Component {
    render() {
        const {
            title, 
            artist, 
            thumbnail_image,
            image,
            url
        } = this.props.album ;
        const {
            headerContentStyle,
            headerTextStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            imageStyle
        } = css 
        return ( 
            <Card>    
                <CardSection>
                    <View style = {thumbnailContainerStyle}>  
                        <Image
                            style = {thumbnailStyle}
                            source={{ uri: thumbnail_image }}
                        />
                    </View>
                    <View style = {headerContentStyle}>      
                        <Text style = {headerTextStyle}>{title}</Text>
                        <Text>by {artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                         style = {imageStyle}
                         source={{ uri: image }}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(url)} >
                        Buy Now!
                    </Button> 
                </CardSection>
            </Card>
        );
    };
};

export default AlbumDetail;