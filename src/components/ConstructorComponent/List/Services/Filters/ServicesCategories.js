import React from 'react';

const ServicesCategories = ({mas, setServicesCategory}) => {
    return (
        <div>
            <select name="servicesCategory" onChange={event => {
                setServicesCategory(event.target.value);
            }}>
                <option value={""}>Nothing</option>
                {
                    mas.map(value =>
                        <option value={value.title} key={value.name}>
                            {value.name}
                        </option>)
                }
            </select>
        </div>
    );
};

export default ServicesCategories;