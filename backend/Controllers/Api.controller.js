import axios from 'axios'


export const Articles = async (req,res)=>{

  const category = req.headers.category
  const newsArticles = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category.toLowerCase()}&lang=en&country=in&apikey=${process.env.NEWS_API_KEY}`)

  res.json(newsArticles.data)
}