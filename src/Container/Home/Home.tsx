import {AsyncStorage, Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from '../../Layout';
import {Component, useEffect} from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../../Store/Action";

export interface Props {
    navigation: any,
    onIncrement: any,
}

class Home extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    async componentDidMount(): void {
        this.props.onIncrement(1);
    }

    render() {
        return (
            <View style={stylesGlobal.root}>
                <Text>Home Screen</Text>
                <Button title={"Go to New Message"} onPress={() => {
                    this.props.navigation.jumpTo('NewMessageTab', {owner: 'Michaś'});
                }}/>
                <Button title={"Go to Login"} onPress={() => this.props.navigation.navigate('Login')}/>
                <Button title={"Go to Help"} onPress={() => this.props.navigation.navigate('Help')}/>
            </View>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        counter: store.counter
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrement: (number: any) => dispatch(increment(number)), //saga
        onDecrement: (number: any) => dispatch(decrement(number)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
