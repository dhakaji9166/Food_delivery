import React from 'react'
import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'

function ExploreMenu({category , setCategory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1 className='explore-menu-text'>Explore our menu</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nostrum iusto quidem, sequi earum, eaque officia accusantium voluptatibus ab necessitatibus fuga sunt neque nemo maxime dolorem repellat. Saepe, minima deserunt.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div className="explore-menu-item" key={index} onClick={()=>setCategory(prev => prev===item.menu_name?"All":item.menu_name)}>
                            <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}


            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu