import React, {useState} from 'react';

import "./item-add-form.css";

type Props = {
    onItemAdded: (message: string) => void
};

const ItemAddForm: React.FC<Props> = ({onItemAdded}) => {
    const [message, setMessage] = useState("");

    const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMessage(event.target.value)
    };

    const onSubmit = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        onItemAdded(message);
        setMessage("");
    };

    return (
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <input type="text"
                   className="form-control col-9 mr-2"
                   value={message}
                   onChange={onLabelChange}
                   placeholder="What needs to be done"/>
            <button className="btn btn-success col-3">
                Add item
            </button>
        </form>
    );
}

export default ItemAddForm;