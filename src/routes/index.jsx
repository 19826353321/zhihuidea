// 独立配置文件 
import { useState, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Idea from '../pages/Home/Idea'
const Attention = lazy(() => import('../pages/Attention'))
const Mine = lazy(() => import('../pages/Mine'))
const Vip = lazy(() => import('../pages/Vip'))
const TopSearch = lazy(() => import('../pages/Home/TopSearch'))
const Recommend = lazy(() => import('../pages/Home/Recommend'))
const IdeaDetail = lazy(() => import('../pages/Home/Idea/IdeaItem/IdeaDetail'))
const Information = lazy(() => import('../components/Information'))
const Search = lazy(() => import('../components/Search'))

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home/idea" element={<Idea />} />
                <Route path="/home/recommend" element={<Recommend />} />
                <Route path="/home/topSearch" element={<TopSearch />} />
            </Route>
            <Route path="/attention" element={<Attention />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/vip" element={<Vip />}></Route>
            <Route path='/ideadetail' element={<IdeaDetail />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/information' element={<Information />}></Route>
        </Routes>
    )
}

export default RoutesConfig