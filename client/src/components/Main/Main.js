import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import Category from '../Category/Category.js';

function Main(props) {
    const { onAdd } = props;
    const { loading, data } = useQuery(QUERY_ITEMS);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main className="block col-2">
            {/* <h2>Search by Category</h2>
            <CategoryOptions setCurrentCategory={setCurrentCategory}></CategoryOptions> */}
            <h2>Products</h2>
            <div className="flex-row">
                {data.items.map((category) => (
                    <Category key={category._id} category={category} onAdd={onAdd}></Category>
                ))};
            </div>
        </main>

    )
}

export default Main;