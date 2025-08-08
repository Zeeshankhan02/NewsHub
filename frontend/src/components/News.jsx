import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NewsArticleCard from "./NewsArticleCard";
import HomeSpinner from "../assets/HomeSpinner/HomeSpinner";

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loader,setLoader] = useState(false)

  const {category} = useParams();
  const navigate = useNavigate(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoader(true)
        setArticles([])
        
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/news`, {
          headers: {
            category: category,
            token: `${localStorage.getItem("token")}`,
          },
        });
        // console.log(res.data);
        setArticles(res.data.articles || []);
        setLoader(false)
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setLoader(false)
          setErrorMessage(error.response.data.message); 
          setShowPopup(true)
          // Or redirect to login page
        } else {
          console.error("Unexpected error:", error);
        }
      }
      finally{
        setLoader(false)
      }
    };

    fetchNews();
  }, [category]);

  return (
    <>
     {showPopup && (
            <div className="fixed top-50 right-140 bg-red-100 text-red-800 px-5 py-2 border border-red-200 rounded z-[999]">
              <p>{errorMessage}</p>
              <button onClick={() => navigate("/signin")}>Close</button>
            </div>
          )}
       {!showPopup && (
        loader ? (
          <HomeSpinner /> // Spinner shows while fetching
        ) : articles.length > 0 ? (
      
        <div className="  p-6 grid w-full lg:grid-cols-2 gap-6 sm:gap-3 ">
            {articles.map((article) => (
              <NewsArticleCard
                key={article.id}
                title={article.title}
                desc={article.description}
                src={article.url}
                img={article.image}
              />
            ))}
          </div>
      
        ) : (
          <p className="text-center mt-10">No articles found Server is temporarily down🥲</p>
        )
      )}
    </>
  )
}