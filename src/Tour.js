import React from "react";

const Tour = ({
  id,
  img,
  title,
  shortDescription,
  fullDescription,
  price,
  tours,
  setTours,
  isFullDescription,
  setIsFullDescription,
}) => {
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });

    setTours(newTours);
  };

  return (
    <>
      <article className="single-tour" key={id}>
        <img src={img} alt="Tour Pictures..." />
        <div className="tour-details">
          <div className="title-price">
            <h4>{title}</h4>
            <p className="price-tag">{price}</p>
          </div>
          {!isFullDescription ? (
            <p>
              {shortDescription}
              <span onClick={() => setIsFullDescription(!isFullDescription)}>
                Read More
              </span>
            </p>
          ) : (
            <p>
              {fullDescription}
              <span onClick={() => setIsFullDescription(!isFullDescription)}>
                Show Less
              </span>
            </p>
          )}
        </div>
        <div className="btn-wrapper">
          <button className="btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </article>
    </>
  );
};

export default Tour;
