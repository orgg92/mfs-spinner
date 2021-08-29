import React from 'react';



const SelectList = (props) => {


    let categoriesList = props.categories.length > 0 
    && props.categories.map((item, i) =>  {
        return (
            <option key={i} value={item.categoryId}>{item.categoryName}</option>
        )
    }, this);

    return (
        <div>
        <select id="categories">
            <option value="">Choose a category</option>
            {categoriesList}
        </select> 
    </div>
    );
 
}

export default SelectList;