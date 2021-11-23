import React from "react";
import Category from '../Category/Category.js';

function Main(props) {
    const {categories} = props;
    return (
        <main className="block col-2">
            <h2>Categories</h2>
            <div className="row">
                {categories.map((category) => (
                    <Category key={category.id} category={category}></Category>
                ))};
            </div>
        </main>

    )
}
export default Main;