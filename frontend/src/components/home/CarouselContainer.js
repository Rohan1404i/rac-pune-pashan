import React, { useEffect, useRef, useState } from 'react';
import './CarouselContainer.css'; 
import carousel1 from '../../assets/carousel1.jpg'
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import {Carousel} from 'antd';

export default function CarouselContainer (){

  const curRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  console.log(curRef)

  return (
  <Carousel ref={curRef} afterChange={onChange} className='carouselWholeCont'>
      <div className='eachCont'>
        <video src={video1} className='video' autoPlay controls muted/>
      </div>
      <div className='eachCont'>
        <img src={carousel1} style={{width:'100%'}}/>
      </div>
      <div className='eachCont'>
        <video src={video2} className='video' autoPlay controls muted/>
      </div>
    </Carousel>  
  );
};