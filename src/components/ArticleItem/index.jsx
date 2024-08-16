import PropTypes from 'prop-types';

export default function ArticleItem({ article, searchTerm }) {
    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, 'gi');
        return text.split(regex).map((part, index) =>
            regex.test(part) ? <span key={index} className="bg-yellow-300">{part}</span> : part
        );
    };

    return (
        <div className="mb-6 p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {highlightText(article.title, searchTerm)}
            </h2>
            <p className="text-gray-700">
                {highlightText(article.content, searchTerm)}
            </p>
        </div>
    );
}

ArticleItem.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    searchTerm: PropTypes.string.isRequired,
};
