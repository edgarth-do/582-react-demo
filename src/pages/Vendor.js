import React from 'react'
import '../css/Vendor.css';


function Vendor() {
    const inventory = [
        { id: 1, material: "Brick", image: "", quantity: 40, price: 120 },
        { id: 2, material: "Wood", image: "", quantity: 150, price: 45 },
        { id: 3, material: "Plywood", image: "", quantity: 200, price: 25 },
        { id: 4, material: "Glass Tile", image: "", quantity: 150, price: 35 },
    ]
    return (
        <div className="vendor-view">
            <a className='quote' href="/">Home |</a>
            <h1 className='quote'>Quote</h1>
            <div className="up">
            </div>
            <div className="table">
                <div className="room"> <img alt="material" src="./rooms.png" /> </div>
                <table className="main">
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Image</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item) => (
                            <tr key={item.id}>
                                <td><img alt="material" src="./materials.png" /> </td>
                                <td>{item.material}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='total'>
                    <p><span>225</span></p>
                </div>
            </div>

            <div className="bottom">
            </div>
        </div>
    );
}
export default Vendor;