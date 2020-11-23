import React, {Component} from 'react';

import "./search-panel.css";

class SearchPanel extends Component {
    state = {
        term: ""
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <div>
                <input type="text"
                       className="form-control search-input"
                       placeholder="type to search"
                       value={this.state.term}
                       onChange={this.onSearchChange}/>
            </div>
        );
    }
}

export default SearchPanel;

