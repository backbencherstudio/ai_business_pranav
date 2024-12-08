import React from "react";
import "./workflow.scss";
import Flipper from "../../components/Flipper/Flipper";
import Timeline from "../../components/Flipper/Timeline";
const Workflow = () => {
  return (
    <div className="Workflow-container">
      <div className="about-service" style={{ width: "1021px" }}>
        <p style={{ paddingTop: "246px" }} className="title">
          [ 003// OUR Services ]
        </p>
        <div className="desc">
          With us, as your Artificial intelligence automation partner, you get
          the best in industry technologies of tomorrow, <span>TODAY.</span>
        </div>
      </div>

      <div className="box1"></div>
        <Timeline />
        
    </div>
  );
};

export default Workflow;
