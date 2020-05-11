import React from 'react';
import {Home} from './Home'
import {Contact} from './Contact';
import {Video} from './Video';
import {VideoDetail} from './VideoDetail';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const MyRoutes = createMaterialTopTabNavigator({
        HomeRT: {
            screen: Home
        },
        ContactRT: {
            screen: Contact
        },
        LessonsRT: {
            screen: Video
        },
        VideoDetailRT: {
            screen: VideoDetail
        }
    },
    {
        initialRouteName: 'HomeRT'
    }
);

export default createAppContainer(MyRoutes);


