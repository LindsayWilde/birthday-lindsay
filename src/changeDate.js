import React from 'react';

const ChangeDate = (title, callBack) => {
    return (
        <button className="change-date" onClick={callBack}>
            <i className="fas fa-calendar-alt"></i>
            {title}
        </button>
    )
}
export default ChangeDate;
