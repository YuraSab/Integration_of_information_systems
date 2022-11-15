import React from 'react';

const CommodityCategories = ({mas, setCommodityCategory, setCommodityTypes}) => {
    return (
        <div>
            <select name="commodityCategory" onChange={event => {
                setCommodityCategory(event.target.value);
                setCommodityTypes("");
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

export default CommodityCategories;