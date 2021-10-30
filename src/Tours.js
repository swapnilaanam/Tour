import React, { useEffect, useState } from "react";
import { data } from "./data";
import Tour from "./Tour";

const Tours = () => {
  const [tours, setTours] = useState(data);
  const [isFullDescription, setIsFullDescription] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <main>
      {isLoading ? (
        <div className="container">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="container">
          {tours.length === 0 ? (
            <>
              <h1>No More Tours</h1>
              <button
                style={{
                  background: "cornflowerblue",
                  padding: "0.5rem 2.5rem",
                  border: "0",
                  marginTop: "1rem",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setTours(data);
                  setLoading(true);
                }}
              >
                Refresh
              </button>
            </>
          ) : (
            <>
              <h1>Our Tours</h1>
              <div className="divider"></div>
              <section id="all-tours">
                {tours.map((tour) => {
                  return (
                    <Tour
                      {...tour}
                      tours={tours}
                      setTours={setTours}
                      isFullDescription={isFullDescription}
                      setIsFullDescription={setIsFullDescription}
                    />
                  );
                })}
              </section>
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default Tours;
