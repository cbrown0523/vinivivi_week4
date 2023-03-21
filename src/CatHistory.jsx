import React from "react";

function CatHistory({ images, origin, breed }) {
  return (
    <div className="catHistory">
      <h2>Who have we seen so far?</h2>
      {images && images.length > 0 ? (
        images.map((pic, index) => (
          <li className="gallery" key={index}>
            <img
              className="gallery"
              style={{ width: "160px", height: "95px" }}
              src={pic}
            />
            <h3>
              A {breed} from {origin}
            </h3>
          </li>
        ))
      ) : (
        <div>
          <h3>You haven't made a query yet!</h3>
        </div>
      )}
    </div>
  );
}

export default CatHistory;
