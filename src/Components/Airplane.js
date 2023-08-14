import React from "react";

const Airplane = () => {
  const airplaneStyles = {
    position: "absolute",
    left: "40%",
    top: "10%",
    zIndex: 3,
    WebkitAnimation: "plainfly 10s linear infinite",
    OAnimation: "plainfly 10s linear infinite",
    animation: "plainfly 10s linear infinite",
  };

  const elementStyles = {
    background: "#f9fbfc",
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    position: "absolute",
    zIndex: 1,
  };

  const headStyles = {
    top: "21px",
    left: "83px",
    width: "60px",
    height: "25px",
    borderRadius: "100%",
  };

  const bodyStyles = {
    top: "20px",
    left: "0",
    width: "130px",
    height: "26px",
    borderRadius: "40% 30% 20% 50%",
    zIndex: 1,
  };

  const lwingStyles = {
    top: "7px",
    left: "60px",
    height: "21px",
    width: "30px",
    borderRadius: "5px",
    zIndex: 0,
    WebkitTransform: "skew(51deg, 0deg)",
    msTransform: "skew(51deg, 0deg)",
    OTransform: "skew(51deg, 0deg)",
    transform: "skew(51deg, 0deg)",
  };

  const rwingStyles = {
    top: "34px",
    left: "57px",
    height: "27px",
    width: "35px",
    borderRadius: "5px",
    zIndex: 1,
    boxShadow: "0px 6px 4px rgba(0, 0, 0, 0.16)",
    WebkitTransform: "skew(-49deg, 0deg)",
    msTransform: "skew(-49deg, 0deg)",
    OTransform: "skew(-49deg, 0deg)",
    transform: "skew(-49deg, 0deg)",
  };

  const taleStyles = {
    top: "15px",
    left: "10px",
    width: "16px",
    height: "16px",
    borderRadius: "2px",
    WebkitTransform: "skew(35deg, -9deg)",
    msTransform: "skew(35deg, -9deg)",
    OTransform: "skew(35deg, -9deg)",
    transform: "skew(35deg, -9deg)",
    background: "linear-gradient(0deg, #fff, #bbdeff)",
  };

  const windowStyles = {
    content: "",
    top: "6px",
    left: "48px",
    width: "4px",
    height: "4px",
    borderRadius: "30%",
    background: "#9ad0f5",
    border: "1px solid #5093d1",
    position: "absolute",
  };

  const windowBeforeStyles = {
    content: "",
    left: "-12px",
    top: "-1px",
  };

  const windowAfterStyles = {
    content: "",
    left: "10px",
    top: "-1px",
  };

  return (
    <div style={airplaneStyles}>
      <div style={elementStyles}></div>
      <div style={bodyStyles}>
        <div style={windowStyles}></div>
        <div style={windowStyles}></div>
        <div style={windowStyles}></div>
      </div>
      <div style={lwingStyles}></div>
      <div style={rwingStyles}></div>
      <div style={taleStyles}></div>
    </div>
  );
};

export default Airplane;
