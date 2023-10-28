import React from 'react'
import '../css/Inventory.css';


function Inventory() {
    const inventory = [
        { id: 1, material: "Brick", image: "", quantity: 40, price: 120 },
        { id: 2, material: "Wood", image: "", quantity: 150, price: 45 },
        { id: 3, material: "Plywood", image: "", quantity: 200, price: 25 },
        { id: 4, material: "Glass Tile", image: "", quantity: 150, price: 35 },
    ]
    return (
        <div className='container'>
            <a className='quote' href="/">Home |</a>
            <h1 className='inventory'>Inventory</h1>
            <div className="up">
            </div>
            <p>
                <button className="btn success">New</button>
            </p>
            <div className="table">
                <table className="main">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Material</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.material}</td>
                                <td><img alt="material" src="./materials.png" /></td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="bottom">
                </div>
            </div>
        </div>
    );
}
export default Inventory;