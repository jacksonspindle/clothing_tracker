import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const GarmentCard = (props) => {
  const { garment } = props;
  return (
    <div>
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
};

const Garments = () => {
  const { garments } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [garmentTypeFilter, setGarmentTypeFilter] = useState("");
  const [garmentSizeFilter, setGarmentSizeFilter] = useState("");
  const [garmentPriceFilter, setGarmentPriceFilter] = useState("");

  const garmentTypes = [
    { label: "Shirts", choice: "shirt" },
    { label: "Pants", choice: "pant" },
    { label: "Hoodies", choice: "hoodie" },
    { label: "Jackets", choice: "jacket" },
    { label: "Shoes", choice: "shoe" },
    { label: "Sweaters", choice: "sweater" },
  ];

  const garmentSizes = [
    { label: "Small", choice: "S" },
    { label: "Medium", choice: "M" },
    { label: "Large", choice: "L" },
    { label: "X Large", choice: "XL" },
  ];

  const garmentPrices = [
    { label: "$ 0 - 100", choice: "1" },
    { label: "$ 100 - 300", choice: "2" },
    { label: "$ 300 - 800", choice: "3" },
    { label: "$ 800 +", choice: "4" },
  ];

  const filterByGarmentType = (garmentType) => {
    setGarmentTypeFilter(garmentType.choice);
  };

  const filterByGarmentSize = (garmentSize) => {
    setGarmentTypeFilter("");
    setGarmentPriceFilter("");
    setGarmentSizeFilter(garmentSize.choice);
  };

  const filterByGarmentPrice = (garmentPrice) => {
    setGarmentTypeFilter("");
    setGarmentSizeFilter("");
    setGarmentPriceFilter(garmentPrice.choice);
  };

  const getFilterGarments = () => {
    if (garmentTypeFilter !== "") {
      return garments.filter(
        (garment) => garment.garmentType === garmentTypeFilter
      );
    } else if (garmentSizeFilter !== "") {
      return garments.filter((garment) => garment.size === garmentSizeFilter);
    } else if (garmentPriceFilter !== "") {
      if (garmentPriceFilter === "1") {
        return garments.filter((garment) => garment.price < 100);
      } else if (garmentPriceFilter === "2") {
        return garments.filter(
          (garment) => garment.price <= 300 && garment.price > 100
        );
      } else if (garmentPriceFilter === "3") {
        return garments.filter(
          (garment) => garment.price > 300 && garment.price <= 800
        );
      } else if (garmentPriceFilter === "4") {
        return garments.filter((garment) => garment.price > 800);
      }
    }
    return garments;
  };

  const filteredGarments = getFilterGarments();

  return (
    <div className="garment-filter-container">
      <div className="garment-filter-menu">
        <ul>
          <p className="filter-label"> Garment Type:</p>
          {garmentTypes.map((garmentType) => (
            <li
              onClick={() => filterByGarmentType(garmentType)}
              key={garmentType.choice}
            >
              {garmentType.label}
            </li>
          ))}
        </ul>
        <ul>
          <p className="filter-label"> Size:</p>
          {garmentSizes.map((garmentSize) => (
            <li
              onClick={() => {
                filterByGarmentSize(garmentSize);
              }}
              key={garmentSize.choice}
            >
              {garmentSize.label}
            </li>
          ))}
        </ul>
        <ul>
          <p className="filter-label">Price:</p>
          {garmentPrices.map((garmentPrice) => (
            <li
              onClick={() => {
                filterByGarmentPrice(garmentPrice);
              }}
              key={garmentPrice.choice}
            >
              {garmentPrice.label}
            </li>
          ))}
        </ul>
      </div>
      <ul className="garment">
        {filteredGarments.map((garment) => (
          <GarmentCard garment={garment} key={garment.id} />
        ))}
      </ul>
    </div>
  );
};

export default Garments;
