import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import { View,CardItem,Text,Icon,Button,Left,Right } from 'native-base';
import AppStyle from '../../theme/Style';

class TaskItem extends React.Component{
    task = this.props.task;
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <CardItem style={AppStyle.greyBottomLine}>
                        <Icon style={{color:this.task.iconColor}} name={this.task.logo}/>
                        <Text style={AppStyle.textGreyDark}>{this.task.title}</Text>
                        
                        <Right>
                            <Icon name="add" style={AppStyle.textInfo}/>
                        </Right>
                    </CardItem>
                </TouchableOpacity>
            </View>

        )
    }
}

export default TaskItem;
