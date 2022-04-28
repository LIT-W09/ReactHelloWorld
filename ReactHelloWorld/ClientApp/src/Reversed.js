import React from 'react';
import TextInput from './TextInput';



class Reversed extends React.Component {
    state = {
        text: ''
    }

    onTextBoxChange = e => {
        this.setState({ text: e.target.value })
    }

    reverseText = text => text.split('').reverse().join('');


    onReverseClick = () => {
        const { text } = this.state;
        const reversed = this.reverseText(text);
        this.setState({ text: reversed });
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <TextInput border='success' text={this.state.text} onTextBoxChange={this.onTextBoxChange} />
                    <div className='col-md-4'>
                        <button className='btn btn-success btn-block' onClick={this.onReverseClick}>Reverse</button>
                    </div>
                    <div className='col-md-8 offset-md-2'>
                        <h1>{this.reverseText(this.state.text)}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reversed;