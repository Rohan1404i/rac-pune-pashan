import {useState} from 'react';
import './EventsComponent.css';
import image1 from '../../assets/president.png'
import image2 from '../../assets/president.png'
import image3 from '../../assets/president.png'
import image4 from '../../assets/president.png'
import { NavLink } from 'react-router-dom';

export default function EventsComponent () {

    const [selected, setSelected] = useState('1');


    return (
        <div className='eventsWholeCont' >
            <h3 className='eventsTitle'>Events</h3>
            <hr />
            <div className='eventsCont'>
                <NavLink exact to="/events/CMD"
                    className={`${selected === '1' ? 'eachEventContSelected' : 'eachEventCont'}`} id='1'
                    style={{backgroundImage:`url(${image1})`}}
                    onMouseEnter={e=>setSelected('1')}
                >
                    <p className='eachEventTitle' >Event 1</p>
                    <p className='eachEventDate' >20-20-2023</p>
                </NavLink>
                <NavLink exact to="/events/PDD"
                     className={`${selected === '2' ? 'eachEventContSelected' : 'eachEventCont'}`} id='2'
                    style={{backgroundImage:`url(${image2})`}}
                    onMouseEnter={e=>setSelected('2')}
                >
                    <p className='eachEventTitle' >Event 2</p>
                    <p className='eachEventDate' >20-20-2023</p>
                </NavLink>
                <NavLink exact to="/events/CSD"
                     className={`${selected === '3' ? 'eachEventContSelected' : 'eachEventCont'}`} id='3'
                    style={{backgroundImage:`url(${image3})`}}
                    onMouseEnter={e=>setSelected('3')}
                >
                    <p className='eachEventTitle' >Event 3</p>
                    <p className='eachEventDate' >20-20-2023</p>
                </NavLink>
                <NavLink exact to="/events/ISD"
                     className={`${selected === '4' ? 'eachEventContSelected' : 'eachEventCont'}`} id='4'
                    style={{backgroundImage:`url(${image4})`}}
                    onMouseEnter={e=>setSelected('4')}
                >
                    <p className='eachEventTitle' >Event 4</p>
                    <p className='eachEventDate' >20-20-2023</p>
                </NavLink>
            </div>
        </div>
    )
}