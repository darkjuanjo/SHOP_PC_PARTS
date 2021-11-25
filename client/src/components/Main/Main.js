import React from "react";
import Category from '../Category/Category.js';

function Main(props) {
    const {categories, onAdd} = props;
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="flex-row">
                {categories.map((category) => (
                    <Category key={category.id} category={category} onAdd={onAdd}></Category>
                ))};
            </div>
        </main>

    )
}
export default Main;