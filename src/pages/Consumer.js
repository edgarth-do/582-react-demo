import React from 'react'
import '../css/Consumer.css';
import RoomBox from "../components/RoomBox";
const roomEntries = [
    {
        id: 1,
        title: 'Dinner Room',
        image: 'rooms.png'
    },
    {
        id: 2,
        title: 'Kitchen',
        image: 'rooms.png'
    },
    {
        id: 3,
        title: 'Living Room',
        image: 'rooms.png'
    },
    {
        id: 4,
        title: 'Main Room',
        image: 'rooms.png'
    },
    {
        id: 5,
        title: 'Kids Room',
        image: 'rooms.png'
    },
    {
        id: 6,
        title: 'Bath Room',
        image: 'rooms.png'
    },
];


function Consumer() {
    return (
        <div className="consumer-view">
            <a className='quote' href="/">Home |</a>
            <h1>ROOMS </h1>
            <div className="up">
            </div>
            <RoomBox obj={roomEntries} />;
            <div className="bottom">
            </div>

        </div>
    );
}
export default Consumer;
