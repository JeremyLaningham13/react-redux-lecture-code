import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../redux/starWarsReducer';

class StarWars extends Component {
    componentDidMount(){
        this.props.getCharacters()
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Star Wars Character, definitely not Pokemon</h1>
                <p>{this.props.characters.name}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {characters} = reduxState.starWarsReducer;
    return {
        characters
    }
}

export default connect(mapStateToProps, {getCharacters})(StarWars);