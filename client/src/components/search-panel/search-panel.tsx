import React, {useState} from 'react';

import "./search-panel.css";

type Props = {
    onSearchChange: (term: string) => void
};

const SearchPanel: React.FC<Props> = ({onSearchChange}) => {
    const [term, setTerm] = useState("");

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setTerm(term);

        onSearchChange(term);
    };

    return (
        <>
            <input type="text"
                   className="form-control col-7 mr-3"
                   placeholder="Type to search"
                   value={term}
                   onChange={onSearch}/>
        </>
    );
}

export default SearchPanel;

