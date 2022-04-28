import React from 'react';
import MySecondComponent from './MySecondComponent';

class MyFirstComponent extends React.Component {

    state = {
        number: 0,
        otherNumber: 0
    }

    onButtonClick = () => {
        const { number } = this.state;
        
        this.setState({ number: number + 1 });
    }

    onOtherButtonClick = () => {
        const { otherNumber } = this.state;
        
        this.setState({ otherNumber: otherNumber + 17 });
    }

    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-primary' onClick={this.onButtonClick}>Click me!!</button>
                <button className='btn btn-danger' onClick={this.onOtherButtonClick}>Click me!!</button>
                <h1>{this.state.number}</h1>
                <h1>{this.state.otherNumber}</h1>
                {/* <MySecondComponent name='Avrumi' age={this.state.number} />
                <h1>Hello React!!</h1>
                <MySecondComponent name='John' age={this.state.number} /> */}


            </div>
        )
    }
}

export default MyFirstComponent;
