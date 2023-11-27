import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the cancel icon

interface ColorizedText {
  text: string;
}

interface TextColorizerProps {
  attributeText: string[];
  name: string;
  onColorizedTextsChange: (colorizedTexts: ColorizedText[]) => void;
}

const TextColorizer: React.FC<TextColorizerProps> = ({
  attributeText,
  name,
}) => {
  const [colorizedTexts, setColorizedTexts] = useState<ColorizedText[]>([]);

  const handleTextClick = (text: string) => {
    // Check if the text is already in the array
    if (!colorizedTexts.find((item) => item.text === text)) {
      // Choose a random color (you can customize this logic)

      // Add the clicked text and color to the array
      setColorizedTexts((prevTexts) => [...prevTexts, { text }]);
    }
  };

  const handleCancelClick = (textToRemove: string) => {
    // Remove the item from the array based on the text
    setColorizedTexts((prevTexts) =>
      prevTexts.filter((item) => item.text !== textToRemove)
    );
  };

  return (
    <div>
      <p className="block text-sm mb-2 font-normal general-font text-black uppercase">
        Product Attribute
      </p>
      <div className="bg-[#F5F5F5] border general-font border-[#C1C1C1] w-full py-5 px-6 rounded-lg flex items-center">
        {colorizedTexts.map((item, index) => (
          <span
            key={index}
            style={{
              background: "#FFD9D9",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "5px",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            <span style={{ marginRight: "10px" }}>{item.text}</span>
            <FaTimes
              style={{
                cursor: "pointer",
              }}
              className="hover:cursor-pointer"
              onClick={() => handleCancelClick(item.text)}
            />
          </span>
        ))}
      </div>

      {/* Click event listeners for each word */}
      <div className=" ">
        <p className="text-sm font-normal general-font mr-2 max-w-[631px] mt-3">
          Related Attributes:{" "}
          {attributeText?.map((text) => (
            <span key={text} onClick={() => handleTextClick(text)}>
              {`${text}, `}
            </span>
          ))}
        </p>
      </div>
      {/* Add more words and paragraphs with onClick handlers */}
    </div>
  );
};

export default TextColorizer;
