import news from '../assets/news.jpg';
const NewsItem = ({ articles }) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block mb-3 my-3 mx-3 py-2 px-2"
      style={{ maxWidth: '325px', width: '100%', height: '100%' }}>
      <img
        src={articles.urlToImage ? articles.urlToImage : news}
        style={{ height: '200px', width: '100%', objectFit: 'cover'}}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{articles.title.slice(0, 50)}</h5>
        <p className="card-text">
          {articles.description ? articles.description.substring(0, 70).concat('...') : 'No description available'}
        </p>
        <a href={articles.url} className="btn btn-primary cursor-pointer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
