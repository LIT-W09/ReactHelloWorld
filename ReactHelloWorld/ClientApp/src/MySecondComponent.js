import React from 'react';


class MySecondComponent extends React.Component {
    render() { 
        const { name, age } = this.props;

        return <h2>This is my second component!! and the name is: {name}, and the age is {age}</h2>
    }
}
 
export default MySecondComponent;
