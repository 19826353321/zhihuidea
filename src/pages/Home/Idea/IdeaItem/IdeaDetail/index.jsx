import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet, useParams, Link } from 'react-router-dom'
import { getIdea } from "@/api/request";
import { IdeaDetailWrapper } from "./style";
import Swiper from 'swiper'
import IdeaDetailFooter from "./IdeaDetailFooter";

export default function IdeaDetail() {
  const result = new URLSearchParams(location.search);
  const id = result.get('id');
  const [idea, setIdea] = useState([])
  const [imgData, setImgData] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getIdea()
      data = data.filter((item) => item.id == id)
      setIdea(data)
      const { imgs } = data[0];
      setImgData(imgs)
    })()
  }, [])
  useEffect(() => {
    let swiper;
    if (!swiper) {
      swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }, [imgData])
  return (
    <IdeaDetailWrapper>
      {idea.map((item) =>
        <div key={item.id} >
          <div className='idea-detail-header'>
            <span className="idea-detail-header-left">
              <Link to={{
                pathname: '/home/idea',
              }} >
                <i className='fa fa-angle-left'></i>
              </Link>
              <img src={item.userimg} alt="userimg" className='userimg' />
              <span className='username'>{item.username}</span>
            </span>
            <span className="idea-detail-header-right">
              <p className='concern'>+ 关注</p>
              <i className='fa-ellipsis-v fa'></i>
            </span>
          </div>
          <div className="swiper-container img-swiper">
            <div className="swiper-wrapper">
              {imgData.map((imgs) => (<div className="swiper-slide" key={imgs.imgId}>
                <img src={imgs.img} width="100%" />
              </div>))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <p className='content'>{item.content}</p>
        </div>
      )}
      <IdeaDetailFooter idea={idea} />
    </IdeaDetailWrapper>

  )
}
