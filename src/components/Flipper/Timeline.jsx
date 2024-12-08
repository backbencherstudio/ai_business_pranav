import React, { useState } from "react";
import "./Timeline.scss";

const Timeline = () => {
  const [activeCard, setActiveCard] = useState(1);

  const nodes = [
    {
      id: 1,
      title: "INITIAL CONSULTATION",
      description: "We start with a deep dive in your business, find your needs, and list your goals."
    },
    {
      id: 2,
      title: "CUSTOMIZED PROPOSAL AND AGREEMENT",
      description: "A detailed custom proposal will be developed that includes the strategy and required AI solutions."
    },
    {
      id: 3,
      title: "PROOF OF CONCEPT",
      description: "A prototype will be created to show the impact and future of your business with our proposed solutions."
    },
    {
      id: 4,
      title: "SOLUTION IMPLEMENTATION AND TRAINING",
      description: "Post approval, we deploy the solution and train your team to operate it, ensuring seamless adoption."
    }
  ];

  return (
    <div className="flowchart-container">
      
      {nodes.map((node, index) => (
        <React.Fragment key={node.id}>
          <div className="node" id={`node-${node.id}`}>
            <div className="content">
              <h3>{node.title}</h3>
              <p>{node.description}</p>
            </div>
          </div>
          {index < nodes.length - 1 && <div className="connector"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
