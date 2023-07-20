import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError:true })
    }

    render() {
        if(this.state.hadError) {
            return <h1>Ooops, that is not good. An Error has occurred</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;