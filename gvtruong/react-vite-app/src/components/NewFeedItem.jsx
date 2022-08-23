import React from "react";


export class NewFeedItem extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate',this.props.id, this.props.title)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount',this.props.id,this.props.title)
    }

    render() {
        const {title, content, cb } = this.props;
        return (
            <section>
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={cb}>Delete</button>
            </section>
        )
    }
}