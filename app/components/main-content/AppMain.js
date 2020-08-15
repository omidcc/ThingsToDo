import React from 'react';
import { ScrollView } from 'react-native';
import Tasks from './Tasks';

class AppMain extends React.Component{
     taskList =[
        {
            id:1,
            title:"Buy GP sim",
            description:"go to bs to buy a gm sim",
            logo:"logo-googleplus",
            iconColor:"red"
        },
        {
            id:2,
            title:"Notify Monotosh da",
            description:"go to bs to buy a gm sim",
            logo:"logo-facebook",
            iconColor:"blue"
        }
    ]; 
    render(){
        return(
            <ScrollView>
                <Tasks listName="Today's Tasks" taskList={this.taskList}></Tasks>
            </ScrollView>

        )
    }
}
export default AppMain;