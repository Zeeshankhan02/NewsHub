
function NewsArticleCard({ id,title, desc, img, src }) {
  return (
    <>
        <a href={src} key={id}>
            <div className="bg-[#eef7d2] rounded-xl flex-col sm:h-70 flex items-center sm:flex-row transition-all delay-150 ease-in-out hover:shadow-xl box-shadow-black group">
              <div className="overflow-hidden sm:h-full rounded-t-xl sm:w-full">
              <img
                src={img}
                className="max-w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt=""
              />
              </div>
              <div className="w-full h-full self-center p-3 flex flex-col justify-center ">
                <h2 className="text-xl line-clamp-2 sm:line-clamp-3 font-bold group-hover:text-sky-800"> {title}</h2>
                <p className="text-base/6 line-clamp-5">{desc}</p>
              </div>
            </div>
        </a>
    </>
  );
}

export default NewsArticleCard;
