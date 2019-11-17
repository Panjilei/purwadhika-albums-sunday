import React, {Component} from  'react';
import { Text, View, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'


const styles = {
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
};

class AlbumDetail extends Component {
    render() {
        const {
            title, 
            artist, 
            thumbnail_image,
            image,
            url
        } = this.props.album ;
        return ( 
            <Card>    
                <CardSection>
                    <View style = {styles.thumbnailContainerStyle}>  
                        <Image
                            style = {styles.thumbnailStyle}
                            source={{ uri: thumbnail_image }}
                        />
                    </View>
                    <View style = {styles.headerContentStyle}>      
                        <Text style = { styles.headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                         style = {styles.imagestyle}
                         source={{ uri: image }}
                    />
                </CardSection>
            </Card>
        );
    };
};

export default AlbumDetail;