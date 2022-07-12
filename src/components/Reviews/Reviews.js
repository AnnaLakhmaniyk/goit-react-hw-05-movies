import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInifo } from 'services/moviesApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    getReviewsInifo(movieId)
      .then(data => setReviews(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author:{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2> We don't have reviews for this movie </h2>
      )}
    </div>
  );
};
