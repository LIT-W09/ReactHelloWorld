import React from 'react';

class NumberForm extends React.Component {
    render() {
        const { text, onTextChange, onAddClick} = this.props;
        return (
            <div className='row'>
                <div className='col-md-6 md-offset-2'>
                    <input value={text} onChange={onTextChange} className='form-control' placeholder='Enter Number' />
                </div>
                <div className='col-md-4'>
                    <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
                </div>
            </div>
        )
    }
}

export default NumberForm;