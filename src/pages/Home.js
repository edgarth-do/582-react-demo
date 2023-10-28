import React from 'react'
import '../css/Home.css';

function Home() {
    return (
        <div className="box">
            <div className="head">
            </div>
            <div className="logo">
                <img alt="react" src="./logo512.png" width={50} height={50} />
            </div>
            <div className="buttons">
                <button className="btn default">  <a href="/inventory">VENDOR</a></button>
                <button className="btn default"><a href="/consumer">CUSTOMER</a>  </button>
            </div>
        </div>
    );
}
export default Home;