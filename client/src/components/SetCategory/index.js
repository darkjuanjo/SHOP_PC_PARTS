import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';

function CategoryOptions(props) {
    const {setCurrentCategory} = props;
    const { loading, data } = useQuery(QUERY_ITEMS);
    const categories = [];
    data.items.forEach(item => {
    categories.push(item.category);
    });
    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <div className="categoryOptions">
            <form className="categoryForm">
                {categories.map((category,i) => 
                    <>
                    <input key={data.items._id} type="radio" name='category' id={category} value={category} onClick={() => {setCurrentCategory(category)}} />
                     <label key={i} className="radioLabel" htmlFor={category}>{category}</label>
                    </>
                )}
            </form>
        </div>
    );
};

export default CategoryOptions;