import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DigitalGarments = () => {
  const { garments } = useSelector((state) => state);
  const garment = garments.filter((garment) => garment.state === "digital");
  return (
    <div className="garment-container">
      <ul className="garment">
        {garment.map((garment) => {
          return (
            <div key={garment.id}>
              <Link className="" to={`/garments/${garment.id}`}>
                <li>{garment.name}</li>
                <img
                  className="garment-image-small"
                  src={
                    garment.imageUrl.includes("http")
                      ? `${garment.imageUrl}`
                      : `../../assets/${garment.imageUrl}`
                  }
                ></img>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DigitalGarments;
