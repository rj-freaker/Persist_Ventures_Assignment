import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewsPanel from './components/NewsPanel';
import ScienceNews from './pages/ScienceNews';
import Technology from './pages/Technology';
import Sports from './pages/Sports';
import Nation from './pages/Nation';
import NavComponent from './components/NavComponent';
import Business from './pages/Business';
import Entertaainment from './pages/Entertainment';
import { useState,useEffect } from 'react';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('general');
  const [count,setCount] = useState(0);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews(category) {
      try {
        setLoading(true);
        let categoryURL;
        
        if (category === 'general') {
          categoryURL = `https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=${import.meta.env.VITE_API_TESTING_KEY}`;
          
        } else {
          categoryURL = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${import.meta.env.VITE_API_TESTING_KEY}`;
        }

        const response = await fetch(categoryURL);
        const data = await response.json();

        setNewsData(data.articles);

        setCount(count + 1);

        setLoading(false);
        console.log(`Count is ${count}`);
      } catch (err) {
        console.error('Error fetching news:', err);
        setLoading(false);
      }
    }

    fetchNews(category);
  }, [category]);
  return (
    <div className='container'>
      <NavComponent setCategory={setCategory}/>
      <Routes>
        <Route element={<NewsPanel newsData={newsData} loading={loading}/>} path='/' index/>
        <Route element={<ScienceNews newsData={newsData} loading={loading}/>} path='/science'/>
        <Route element={<Technology newsData={newsData} loading={loading}/>} path='/tech'/>
        <Route element={<Business newsData={newsData} loading={loading}/>} path='/business'/>
        <Route element={<Sports newsData={newsData} loading={loading}/>} path='/sports'/>
        <Route element={<Nation newsData={newsData} loading={loading}/>} path='/nation'/>
        <Route element={<Entertaainment newsData={newsData} loading={loading}/>} path='/entertainment'/>
      </Routes>
    </div>
  )
}

export default App;
