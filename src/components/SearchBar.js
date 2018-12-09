import React from 'react';

class SearchBar extends React.Component {
	state = {term : ''};

	onInputChange = (event) => {
		this.setState({term: event.target.value});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		// call a callback from parent component
		this.props.onFormSubmit(this.state.term);
	}

	render(){
		return(
			<div className="sesarch-bar ui segement">
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
				<label>Video Search</label>
				<input 
				type="text" 
				value={this.state.term}
				onChange={this.onInputChange}
				/>
				</div>
			</form>
			</div>
		);
	}
}


export default SearchBar;