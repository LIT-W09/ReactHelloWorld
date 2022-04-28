import React from 'react';

class TextInput extends React.Component {
    render() {
        const { border, text, onTextBoxChange} = this.props;
        return (
            <div className='col-md-6 offset-md-2'>
                <input value={text} onChange={onTextBoxChange} className={`form-control border border-${border}`} />
            </div>
        )
    }
}

export default TextInput