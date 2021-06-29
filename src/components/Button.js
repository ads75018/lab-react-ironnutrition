import React from 'react';


class Button extends React.Component {

    state = {
        FieldsDisplay: false,
    };

    displayFields = () => {

        this.setState({
            FieldsDisplay: !this.state.FieldsDisplay, // toggle
        });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        const stateCopy = [...this.state];
        console.log("arr", stateCopy)
        // alert(this.state.nameValue + ' <==> ' + this.state.textareaInputValue);
    }

    addMovieHandler = (theMovie) => {
        // this.setState({})
        const moviesCopy = [...this.state.movies];
        moviesCopy.push(theMovie);
        this.setState({
            movies: moviesCopy,
        });
    };

    render() {
        return (<>
            <button onClick={this.displayFields}>ADD FOOD</button>
            {this.state.FieldsDisplay && (<div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name<input name="name" type="text" value={this.state.nameValue} onChange={e => this.handleChange(e)}></input></label>
                    <label>Calories<input name="calories" value={this.state.caloriesValue} type="text" onChange={e => this.handleChange(e)}></input></label>
                    <label>Image<input name="image" value={this.state.imageValue} type="text" onChange={e => this.handleChange(e)}></input></label>
                    <button>Submit</button> </form></div>)}
        </>)
    }


}


export default Button;