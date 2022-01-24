

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button
                className='square'
                onClick={() => {
                    this.setState({ value: 'X' });
                }} >
                {this.state.value}
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player : X';
        return (
            <div>
                <div className="status"> {status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ }</div>
                    <ol>  { }  </ol>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#reactRoot');
ReactDOM.render(<Game />, domContainer);


/*
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
*/