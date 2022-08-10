import './App.css';
import axios from "axios";
import Navinshorts from './components/Navinshorts';
import { useEffect, useState } from 'react'
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config';
import Footer from './components/Footer/Footer'


function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);;


    } catch (error) {
      console.log("Error")
    }
  }
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}></Navinshorts>

      <NewsContent setLoadMore={setLoadMore}
        loadMore={loadMore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />

    </div>
  );
}

export default App;
