import React from 'react';
import NumberForm from './NumberForm';
import NumberListDisplay from './NumberListDisplay';

class NumberLister extends React.Component {

    state = {
        text: '',
        numbers: []
    }

    onTextChange = e => {
        this.setState({ text: e.target.value });
    }

    onAddClick = () => {
        const { numbers, text } = this.state;
        const copy = [text, ...numbers];

        this.setState({ numbers: copy, text: '' });
    }

    render() {
        return (
            <div className='container mt-5'>
                <NumberForm
                    onTextChange={this.onTextChange}
                    text={this.state.text}
                    onAddClick={this.onAddClick} />
                <NumberListDisplay numbers={this.state.numbers} />
            </div>
        )
    }
}

export default NumberLister;