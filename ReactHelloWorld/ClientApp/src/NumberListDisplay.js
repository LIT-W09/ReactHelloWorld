import React from 'react';

class NumberListDisplay extends React.Component {

    generateLi = (number, key) => {
        let classNames = 'list-group-item';
        if (number > 100) {
            classNames += ' bg-danger';
        }

        return <li key={key} className={classNames}>
            <h1>{number}</h1>
        </li>;
    }



    render() {
        const { numbers } = this.props;
        return <ul className="list-group">
            {
                numbers.map((n, i) => this.generateLi(n, i))
            }
        </ul>
    }
}

export default NumberListDisplay;

