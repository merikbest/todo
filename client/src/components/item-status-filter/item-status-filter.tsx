import React from 'react';

type Props = {
    filter: string,
    onFilterChange: (filter: string) => void
};

const ItemStatusFilter: React.FC<Props> = ({filter, onFilterChange}) => {
    const buttonActions = [
        {name: "all", label: "All"},
        {name: "active", label: "Active"},
        {name: "done", label: "Done"},
    ];

    const buttons = buttonActions.map(({name, label}) => {
        const isActive: boolean = filter === name;
        const clazz: string = isActive ? "btn-success" : "btn-dark";

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group col px-0">
            {buttons}
        </div>
    );
}

export default ItemStatusFilter;
