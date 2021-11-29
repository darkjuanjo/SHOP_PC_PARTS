import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';
import Featured from "../Featured";

function Main(props) {
    const { onAdd } = props;
    const { loading, data } = useQuery(QUERY_ITEMS);

    if (loading) {
        return <div>Loading...</div>;
    }
    var featuredProducts = []

    if(data.items.length > 0)
    {
        for (let index = 0; index < 4; index++) {
            featuredProducts.push(data.items[index]);
        }
    }
    return (
        <main className="block col-2">
            <h2 className="featureTitle">Featured Products</h2>
            {data.items.length > 0? (
            <div className="flex-row">
            {featuredProducts.map((product) => (
                <Featured key={product._id} product={product} onAdd={onAdd}></Featured>
            ))};
        </div>
            ):(
                <div>No Items yet!</div>
            )
            }
        </main>

    )
}

export default Main;