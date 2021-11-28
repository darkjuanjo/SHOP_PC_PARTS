import React, { useState } from "react";
import Category from '../Category/Category.js';
import CategoryOptions from "../SetCategory/index.js";

function Main(props) {
    const [currentCategory, setCurrentCategory] = useState('');
    const { products, onAdd } = props;

    const currentProducts = products.filter((selection) => selection.category === currentCategory);
    // console.log(currentCategory);

    return (
        <main className="block col-2">
            <h2>Search by Category</h2>
            <CategoryOptions setCurrentCategory={setCurrentCategory}></CategoryOptions>
            <h2>Products</h2>
            <div className="flex-row">
                {currentCategory ? (
                    currentProducts.map((category) => (
                        <Category key={category.id} category={category} onAdd={onAdd}></Category>
                    ))
                ) : (
                    products.map((category) => (
                        <Category key={category.id} category={category} onAdd={onAdd}></Category>
                    ))
                )}

            </div>
        </main>

    )
}
export default Main;