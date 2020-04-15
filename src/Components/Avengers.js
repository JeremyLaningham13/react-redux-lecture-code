import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addAvenger} from '../redux/reducer';

class Avengers extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleAdd = () => {
        const newAvenger = {
            id: this.props.avengers[this.props.avengers.length - 1].id + 1,
            name: this.state.nameInput
        }

        this.props.addAvenger(newAvenger);
    }

    render(){
        console.log(this.props)
        const mappedAvengers = this.props.avengers.map((avenger, i) => (
            <p key={i}>{avenger.name}</p>
        ))
        return (
            <div>
                <h1>Avengers</h1>
                <input 
                    value={this.state.nameInput}
                    placeholder='Avenger Name'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={this.handleAdd}>Add Avenger</button>
                {mappedAvengers}
            </div>
        )
    }
}

//Line below gives us ALL of reduxState
// const mapStateToProps = reduxState => reduxState;

const mapStateToProps = reduxState => {
    const {avengers, randomData} = reduxState.reducer;
    return {
        avengers: avengers,
        randomData: randomData,
    }
}

//Traditional way, but not the most common
// const mapDispatchToProps = {
//     addAvenger: addAvenger
// }

//More common way below, passing in an object literal with (mapStateProps, {addAvenger})

export default connect(mapStateToProps, {addAvenger})(Avengers);