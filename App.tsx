import React from 'react';
import AppContainer from "./routing/AppContainer";
import { Font } from 'expo';
import {Ionicons} from "@expo/vector-icons";
import firebase from 'firebase';
import {firebaseConfig} from "./api-key";

interface AppState {
    fontLoaded: boolean;
}

export default class App extends React.Component<null, AppState> {

    async componentWillMount() {
        firebase.initializeApp(firebaseConfig);
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            // @ts-ignore
            ...Ionicons.font,
        });
        this.setState({fontLoaded: true});
    }

    constructor(props: any) {
        super(props);

        this.state = {
            fontLoaded: false
        };
    }



    render() {
        return (
            this.state.fontLoaded ?  <AppContainer/> : null
        );
    }
}


