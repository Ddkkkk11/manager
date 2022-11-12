import React from 'react'
import './style.css'
export default function Header() {
  return (
    <div className='dashboard-title'>
      <div className='dashboard-title-clock'>
        <span className='current-date'>2022-11-13
        <span className="traingle"></span>
        </span>
        <div className="clock">
        </div>
      </div>
      <div className='dashboard-nav'>
        <span data-type="1" className="">综合数据</span> 
        <span data-type="1" className="">电影票房</span> 
        <span data-type="1" className="">网播热度</span> 
        <span data-type="1" className="">电视收视</span> 
      </div>
      <div className='dashboard-title-group'>
        <div className='dashboard-title-togglefullscreen' onClick={() => {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) { 
              docElm.requestFullscreen(); 
            };
            if (document.exitFullscreen) { 
              document.exitFullscreen(); 
              } 
             

          }
        }>
          全屏
        </div>
      </div>
    </div>
  )
}
