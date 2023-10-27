import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/RoomBox.css';

function RoomBox(props) {
    const navigate = useNavigate();

    function onClickNavigate(e) {
        navigate('/vendor');
        console.log(e.target);
    }

    return (
        <div >
            {props ? (
                <div className='chart'>
                    {props.obj.map((item) => (
                        <div onClick={onClickNavigate} className='RoomBox' key={item.id}>
                            <img alt="material" src="./rooms.png" />
                            <p className='title'>  {item.title}  </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}