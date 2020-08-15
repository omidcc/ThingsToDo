import React from 'react';
import {StyleSheet} from 'react-native';
import { View,Card,Text,Icon,Button,Left,Right, CardItem } from 'native-base';
import TaskItem from './TaskItem';
import AppStyle from '../../theme/Style';

class Tasks extends React.Component{
    render(){
        return(
            <View>
                <Card bordered>
                    <CardItem header bordered style={AppStyle.bgInfo}>
                        <Text style={AppStyle.textWhite}>{this.props.listName}</Text>
                    </CardItem>
                        {this.props.taskList.map(task => {
                            return (
                                <TaskItem task={task} key={task.id}/>
                            )
                        })}
                    
                </Card>
            </View>

        )
    }
}
export default Tasks;