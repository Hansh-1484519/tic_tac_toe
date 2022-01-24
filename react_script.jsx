

function Square(props){

    //remove the constructor as square is not maintaining the state
    /*
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    } */
        return (
            <button
                className='square'
                onClick={() => {
                    props.onClick();
                }} >
                {props.value}
            </button>
        );
}

class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares : squares});
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />);
    }

    render() {
        const status = 'Next player : X';
        return (
            <div>
                <div className="status">
                    {status}
                </div>
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
                    <React.StrictMode>
                        <Board />
                    </React.StrictMode>
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