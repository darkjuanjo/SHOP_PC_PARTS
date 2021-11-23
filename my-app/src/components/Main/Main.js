import React from "react";
import Category from '../Category/Category.js';

function Main(props) {
    const {category} = props;
    return (
        <main className="block col-2">
            <h2>Categories</h2>
            <div className="row">
                {category.map((categories) => {
                    <Category key={categories.id} categories={categories}></Category>
                })}
            </div>
        </main>

    )
}
export default Main;