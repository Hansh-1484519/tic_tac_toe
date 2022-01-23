'use strict';

const e = React.createElement;

class Square extends React.Component{
    render(){
        return(
            <button className = 'square' >
                {this.props.value}
            </button>
            );
    }
}

class Board extends React.Component{

    render(i){
        return(
            <div>
                    <Square value = {i}/>
            </div>
        );
    }
}

class Game extends React.Component{

    render(){
        return(
            <div>
                <Board/>
            </div>
        );
    }
}

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            // Jsx syntax will not work without transpiling so needed a transpiler like babel;
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#reactRoot');
ReactDOM.render( <Game/> , domContainer);