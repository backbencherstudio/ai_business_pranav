import React, { useState } from "react";

const Flipper = () => {
  const contentData = [
    {
      frontContent: {
        title: "Exclusive Offer",
        description:
          "Get 30% off on all your bookings today! Don’t miss out on this limited-time deal.",
      },
      backContent: {
        title: "Booking Details",
        description:
          "Destination: Bali, Indonesia\nDuration: 7 Days, 6 Nights\nPrice: $1,200 (after discount)",
      },
    },
    {
      frontContent: {
        title: "Special Discount",
        description:
          "Buy 1, Get 1 Free on selected destinations. Hurry up and book now!",
      },
      backContent: {
        title: "Booking Information",
        description:
          "Destination: Paris, France\nDuration: 5 Days, 4 Nights\nPrice: $1,000 (after discount)",
      },
    },
    {
      frontContent: {
        title: "Exclusive Offer",
        description:
          "Get 30% off on all your bookings today! Don’t miss out on this limited-time deal.",
      },
      backContent: {
        title: "Booking Details",
        description:
          "Destination: Bali, Indonesia\nDuration: 7 Days, 6 Nights\nPrice: $1,200 (after discount)",
      },
    },
    {
      frontContent: {
        title: "Special Discount",
        description:
          "Buy 1, Get 1 Free on selected destinations. Hurry up and book now!",
      },
      backContent: {
        title: "Booking Information",
        description:
          "Destination: Paris, France\nDuration: 5 Days, 4 Nights\nPrice: $1,000 (after discount)",
      },
    },
    // Add more objects as needed
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="flipper-container">
      {contentData.map((content, index) => (
        <div
          className={`flipper-card ${flippedIndex === index ? "flipped" : ""}`}
          key={index}
        >
          {/* Front Side */}
          <div className="flipper-front">
            <div className="flipper-content">
              <h2 className="title">{content.frontContent.title}</h2>
              <p className="text">{content.frontContent.description}</p>
              <button
                onClick={() => handleFlip(index)}
                className="button flip-button"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Back Side */}
          <div className="flipper-back">
            <div className="flipper-content">
              <h2 className="title">{content.backContent.title}</h2>
              <p className="text">{content.backContent.description}</p>
              <button
                onClick={() => handleFlip(index)}
                className="button flip-button"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flipper;
