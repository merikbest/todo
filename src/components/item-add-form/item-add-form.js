import React, {Component} from 'react';

import "./item-add-form.css";

class ItemAddForm extends Component {
    state = {
        label: ""
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({
            label: ""
        });
    };

    render() {
        const {onItemAdded} = this.props;

        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control col-9"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"/>
                <button className="btn btn-outline-secondary col-3">
                    Add item
                </button>
            </form>
        );
    }
}

export default ItemAddForm;