import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://github.com/eduardo-ehsc.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Eduardo Correia</Text>
                    <Text style={styles.subject}>Programação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                {'\n'}
                Commodi est debitis ab incidunt numquam ad quam aut blanditiis repellat corporis dolorem, magni aliquid, dolore, fuga quod quis? Earum, impedit aliquam.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ 80,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image 
                            source={heartOutlineIcon}
                        />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image 
                            source={whatsappIcon}
                        />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;