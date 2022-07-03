import React, { useEffect } from 'react'
import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import propTypes from 'prop-types'
export default function IdeaItem({ idea }) {

  return <Wrapper >
    <div className=' idea-item'>
      <ul>
        {idea.map(item => (
          <li key={item.id} >
            <Link to={{
              pathname: '/ideadetail',
              search: `id=${item.id}`
            }} >
              <img className='img' src={item.imgs[0].img} alt="" />
              <div className='idea-body'>
                <p>{item.content}</p>
                <div className='ideaitem-footer flex'>
                  <span className='flex'>
                    <img src={item.userimg} alt="" className='user-img' />
                    <span className='username'>{item.username}</span>
                  </span>
                  <span>
                    <i className='iconfont icon-guzhang'></i>
                    <span className='guzhangnumber'>{item.guzhangnumber ? item.guzhangnumber : ""}</span>
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Wrapper >
}

IdeaItem.propTypes = {
  idea:propTypes.array.isRequired
}
