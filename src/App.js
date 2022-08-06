import './App.css';
import bitmap from "./images/Bitmap.png"
import bg1 from "./images/BG_1.png"
import human from "./images/human.png"
import humanRight from "./images/human-right.png"
import oval from "./images/Oval.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import path3 from "./images/Path3.png"
import right from "./images/right.png"
import humanBottom from "./images/human-bottom.png"

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  const [testimonial,setTestimonial] = useState([]);
  const [help,setHelp] = useState([]);
  useEffect(function(){
    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial").then(function(res){
      console.log(res.data);
      setTestimonial(res.data);
    }).catch(function(error){
      console.log(error);
    })

    axios.get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips").then(function(res){
      console.log(res.data);
      setHelp(res.data);
    }).catch(function(error){
      console.log(error);
    })
  },[])
  return (
    <div style={{ fontFamily: 'WorkSans' }} className="text-sm overflow-hidden">
      <div className=' flex justify-center items-center p-2'>
        <div className='lg:w-9/12 w-11/12 flex items-center'>
            <img width={33} height={33} src={bitmap}></img>
            <div className=' ml-2'>
              <p style={{ fontSize: '12px',
                          lineHeight: '14px' }}>Good Morning</p>
              <p style={{ fontSize: '16px',
                          lineHeight: '19px' }}  className=' font-bold'>Fellas</p>
            </div>
        </div>  
      </div>

      <div className='flex items-center flex-col' style={{height:"768px", background : `url(${bg1}),#EEBECE`,backgroundRepeat:"no-repeat"}}>
        <div className="h-20"></div>
        <p style={{ fontSize: '62px',
                    lineHeight: '51px'}}
                    className=" lg:w-full w-80 text-center text-white font-bold ">
                    WEEKEND FROM HOME</p>
        <p style={{ fontSize: '21px',
                    lineHeight: '25px'}}
                    className="mt-5 text-white text-center">Stay active with a little workout.</p>
        <div className='flex flex-col items-center'>
        <img className='mt-20' width={184} height={305} src={human}></img>
        <div style={{ boxShadow:' 0px 20px 30px rgba(249, 131, 171, 0.5)',
                      borderRadius: '29px' }} className=' cursor-pointer hover:opacity-80 absolute mt-64 bg-white w-56 h-16 flex justify-center items-center'>
                        <p style={{ fontSize: '16px',
                                    lineHeight: '19px' }}>Let’s Go</p>
        </div>
        </div>
      </div>

      <div style={{ background:"#EEBECE" }} className=' pinkie flex flex-col items-center relative'>
          <img className=' absolute right-0' width={159} height={158} src={humanRight}></img>
          <div className=' relative'>
          <p style={{ 
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '21px',
                      lineHeight: '32px',
                      letterSpacing: '-0.75px' }} className="deffinition mt-40 text-right"><span style={{ color : "#0B24FB" }}>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
        <p style={{ fontSize: '21px',
                    lineHeight: '25px' }}className=' text-white right-0 absolute mt-10'>-weekend team</p>
        </div>
        <div className='bottom-20 lg:absolute left-72 flex justify-start ml-20 lg:ml-0 w-full'>
          <img width={89} height={89} src={oval}></img>
        </div>
        <div className=' w-full ml-10 lg:ml-0 lg:flex justify-center'>
        <p style={{ fontSize: '32px',
                    lineHeight: '38px',
                    textShadow: '0px 20px 30px rgba(249, 131, 171, 0.7)' }}
                    className="text-white font-bold lg:mt-40 mt-10">Testimonial</p>
                    </div>
     <div className=' w-1/2 mt-10'>
     <Slider {...settings}>
      {testimonial.map(function(data){
        return (
          <div style={{ boxShadow: '0px -10px 20px rgba(249, 131, 171, 0.2)' }}
          className="bg-white p-2 h-36 border-2 border-black">
            <p style={{ fontStyle: 'normal',
                        fontWeight: 900,
                        fontSize: '32px',
                        lineHeight: '38px' }}>{data.by}</p>
            <p style={{ fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '14px',
                        letterSpacing: '-0.428571px' }}
                        className="mt-2">{data.testimony}</p>
          </div>
        )
      })}
    </Slider>
    </div>
        </div>
        <div className='blackie flex flex-col items-center bg-black text-white'>
            <div className=' pov flex flex-col lg:items-center'>
              <p className='font-bold mt-52' style={{fontSize: '32px',lineHeight: '38px'  }}>POV</p>
              <p style={{ fontSize: '18px',
                          lineHeight: '27px',
                          letterSpacing: '-0.642857px' }} className='mt-8 text-left lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              <p className='font-bold mt-16' style={{fontSize: '32px',lineHeight: '38px'  }}>Resource</p>
              <p style={{ fontSize: '18px',
                          lineHeight: '27px',
                          letterSpacing: '-0.642857px' }} className='mt-8 text-left lg:text-center'>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
              <div className=' relative'>
              <p className='font-bold mt-24' style={{fontSize: '32px',lineHeight: '38px'  }}>Help & Tips</p>
              </div>
            </div>
            <div className='hidden lg:block'>
                 <img className='absolute right-20' width={150} height={195} src={path3}></img>
            </div>
            <div className=' mt-10 lg:grid grid-cols-3 gap-x-10 relative'>
                {help.map(function(data){
                  return (
                    <div className='mt-4 lg:mt-0 bg-contain relative' style={{ width:"311px",height:"176px" ,backgroundImage:`url(${data.image})` }}>
                        <div className=' p-4 flex items-center w-full bg-black h-16 bg-opacity-50 absolute bottom-0'>
                          <p className=' font-bold' style={{ fontSize: '16px',
                                      lineHeight: '19px',
                                      letterSpacing: '-0.571429px' }}>{data.title}</p>
                          <img className=' ml-3' src={right}></img>
                        </div>
                    </div>
                  )
                })}
              </div>
              <div className=' flex-col-reverse flex lg:flex-row items-start w-full mt-28'>
              <img className=' relative lg:mt-0 mt-16 ' width={244} height={325} src={humanBottom}></img>
              <div className='flex flex-col lg:items-center w-2/3 ml-8 lg:ml-0'>
              <p className='font-bold' style={{fontSize: '32px',lineHeight: '38px'  }}>You’re all set.</p>
              <p style={{ fontSize: '18px',
                          lineHeight: '27px',
                          letterSpacing: '-0.642857px' }} className='mt-8 text-left lg:text-center'>The wise man therefore always holds in these matters to this principle of selection.</p>
              </div>
              </div>
        </div>

        <div className=' flex justify-center ' style={{ height:"67px",background : "#0B24FB" }}>
          <div className=' w-11/12 lg:w-9/12 relative flex items-center'>
              <p className=' text-white' style={{ fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '19px' }}>wknd@2020</p>
              <div style={{ border : "1px solid white",borderRadius: '12px' }} className=' p-1 absolute right-0'>
                <p className=' text-white' style={{ fontSize: '14px',
                            lineHeight: '16px' }}>alpha version 0.1</p>
              </div>
          </div>

        </div>
                
    </div>
  );
}

export default App;
