import React from 'react';
import {StyleSheet} from 'react-native';
import {Header,Button,Icon,Title,Left,Right,Body} from 'native-base';
import AppStyle from '../../theme/Style';


class AppHeader extends React.Component{
    render(){
        return(
            <Header style={AppStyle.bgMainIntro}>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title style={AppStyle.textWhite}>Header</Title>
                </Body>
                <Right />
            </Header>

        )
    }
}
export default AppHeader;