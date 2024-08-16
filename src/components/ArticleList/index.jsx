import PropTypes from 'prop-types';
import ArticleItem from "../ArticleItem";

export default function ArticleList({ articles, searchTerm }) {
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                    <ArticleItem key={article.id} article={article} searchTerm={searchTerm} />
                ))
            ) : (
                <p className="text-gray-500 text-center">No articles found</p>
            )}
        </div>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
    searchTerm: PropTypes.string.isRequired,
};
