import React from "react";
import PropTypes from "prop-types";

const CardInfo = ({ title, value, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h6>{title}</h6>
        <div className="value">{value}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

CardInfo.defaultProps = {
  title: "Default Title",
  value: "N/A",
  description: "No description available",
};

CardInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
};

export default CardInfo;