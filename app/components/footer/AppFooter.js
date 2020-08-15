import React from 'react';
import {Footer,FooterTab,Button,Icon,Text} from 'native-base';
import AppStyle from '../../theme/Style';

class AppFooter extends React.Component{
    render(){
        return(
            <Footer>
                <FooterTab style={AppStyle.bgMainIntro}>
                    <Button vertical>
                    <Icon name="apps" />
                    <Text style={AppStyle.textWhite}>Apps</Text>
                    </Button>
                    <Button vertical>
                    <Icon name="camera" />
                    <Text style={AppStyle.textWhite}>Camera</Text>
                    </Button>
                    <Button vertical active>
                    <Icon active name="navigate" />
                    <Text style={AppStyle.textWhite}>Navigate</Text>
                    </Button>
                    <Button vertical>
                    <Icon name="person" />
                    <Text style={AppStyle.textWhite}>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>

        )
    }
}
export default AppFooter;