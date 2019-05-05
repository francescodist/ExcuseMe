import React from 'react';
import {Button, Container, Content, Form, Input, InputGroup, List, ListItem, Text} from 'native-base';
import {SecureStore} from "expo";
import firebase from 'firebase';

interface LoginState {
    email: string;
    password: string;
}

export default class LoginPage extends React.Component<any, LoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{flex: 1, alignItems: "center", justifyContent: "center", alignSelf:"stretch"}}>
                    <List style={{alignSelf: "stretch"}}>
                            <Form>
                                <InputGroup>
                                    <Input autoCapitalize={"none"} textContentType={"emailAddress"} placeholder={"email"} onChangeText={this.setEmail} value={this.state.email}/>
                                </InputGroup>
                                <InputGroup>
                                    <Input autoCapitalize={"none"} textContentType={"password"} secureTextEntry placeholder={"password"} onChangeText={this.setPassword} value={this.state.password}/>
                                </InputGroup>
                                <Button style={{marginTop: 16}} block onPress={this.login}>
                                    <Text>Login</Text>
                                </Button>
                            </Form>
                    </List>
                </Content>
            </Container>
        );
    }

    public login = async () => {
        let token = await firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);
        await SecureStore.setItemAsync("token", JSON.stringify(token));
        this.goToHomePage();
    };

    public goToHomePage = () => {
        this.props.navigation.navigate('Home');
    };

    public setEmail = (email: string) => {
        this.setState({email})
    };

    public setPassword = (password:string) => {
        this.setState({password});
    };
}
