import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './react-scroll-arrow.css'

interface ReactScrollArrowProps {
  component?: React.ComponentType<{ style?: React.CSSProperties }>;
  pageYOffset?: number;
}

const ReactScrollArrow = ({component, pageYOffset}: ReactScrollArrowProps) =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    let myOffset = pageYOffset ?? 400
    if (!showScroll && window.pageYOffset > myOffset){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= myOffset){
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="scrollTop" style={{display: showScroll ? 'flex' : 'none'}} onClick={scrollTop}>
      {component 
        ? <> {React.createElement(component, {
          style: {
            color: 'red !important',
            fontSize: '20px',
          }
        })} </>
        : <span className="scrollTopIcon"><FaArrowCircleUp/></span>
      }
      </div>
  );
}

export default ReactScrollArrow;