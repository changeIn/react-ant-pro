import React, {
    Component
} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {

        return ( <
            div style = {
                {
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '40px'
                }
            } >
            <
            h2 style = {
                {
                    color: 'rgb(144, 159, 172)',
                    fontFamily: 'cursive',
                    fontSize: '42px',
                    fontWeight: '700'
                }
            } > 欢迎使用多标签Ant - Tabs < /h2> <
            /div>
        );
    }
}