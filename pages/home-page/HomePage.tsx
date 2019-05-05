import React from 'react';
import { Text, View } from 'react-native';
import {SecureStore} from "expo";

interface HomeState {
    text: string;
}

export default class HomePage extends React.Component<any, HomeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            text: ''
        }
    }

    async componentDidMount() {
        let token = await SecureStore.getItemAsync("token");
        this.setText(token);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>{this.state.text}</Text>
            </View>
        );
    }

    public setText(text: string|null) {
        text = text || "";
        this.setState({text});
    }
}
