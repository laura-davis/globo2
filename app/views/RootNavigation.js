import React from 'react';
import {Home} from './Home'
import {Contact} from './Contact';
import {Video} from './Video';
import {VideoDetail} from './VideoDetail';
import {Register} from './Register';
import {Login} from './Login';
import {Quiz} from "./Quiz";
import {QuizFinish} from "./QuizFinish";
import {About} from "./About";
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
        },
        RegisterRT: {
            screen: Register
        },
        LoginRT: {
            screen: Login
        },
        QuizRT: {
            screen: Quiz
        },
        FinishRT: {
            screen: QuizFinish
        },
    AboutRT: {
            screen: About
    }
    },
    {
        initialRouteName: 'HomeRT'
    }
);

export default createAppContainer(MyRoutes);


