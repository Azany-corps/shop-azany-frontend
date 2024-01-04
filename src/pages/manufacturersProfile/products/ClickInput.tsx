import React, { useState, useEffect } from "react";

interface ColorizedText {
  id: string;
  text: string[];
}

interface TextColorizerProps {
  attributeText: string[];
  name: string;
  id: string;
  onColorizedTextsChange: (colorizedTexts: ColorizedText) => void;
}

const TextColorizer: React.FC<TextColorizerProps> = ({
  attributeText,
  name,
  id,
  onColorizedTextsChange,
}) => {
  const [colorizedTexts, setColorizedTexts] = useState<ColorizedText>({
    id: id,
    text: [],
  });

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = event?.target;
  //   // setFormData({ ...formData, [name]: value });
  // };

  const handleTextClick = (text: string) => {
    // Check if the text is already in the array
    if (!colorizedTexts.text.find((item) => item === text)) {
      // Choose a random color (you can customize this logic)

      // Add the clicked text and color to the array
      setColorizedTexts({
        ...colorizedTexts,
        text: [...colorizedTexts.text, text],
      });
    }
  };

  const handleCancelClick = (textToRemove: string) => {
    // Remove the item from the array based on the text
    const newText = colorizedTexts.text.filter((item) => item !== textToRemove);

    setColorizedTexts({ ...colorizedTexts, text: [...newText] });
  };

  useEffect(() => {
    onColorizedTextsChange(colorizedTexts);
  }, [colorizedTexts]);

  return (
    <div>
      <p className="block mb-2 text-app-gray-300">{name}</p>
      <div className="flex flex-col gap-2">
        <div className="bg-transparent border-app-gray-100 border general-font w-full h-[40px] px-2 py-2 rounded-[10px] flex items-center">
          {colorizedTexts.text.map((item, index) => (
            <span
              key={index}
              style={{
                background: "#F0F0FF",
                color: "#4945FF",
                padding: "10px",
                borderRadius: "10px",
                marginRight: "5px",
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 700,
                fontSize: "12px",
                fontFamily: "DM Sans",
              }}
            >
              <span
                style={{
                  borderRight: "1px solid #D9D8FF",
                  padding: "0px 8px 0 8px",
                }}
              >
                {item}
              </span>
              <img
                src="/images/times-input-icon.svg"
                alt="cancel-icon"
                className="cursor-pointer pl-2"
                onClick={() => handleCancelClick(item)}
              />
            </span>
          ))}
        </div>

        {/* Click event listeners for each word */}
        <div className="flex flex-wrap gap-4">
          {attributeText?.map((text) => (
            <span
              key={text}
              className="text-sm  text-[#4945FF] hover:cursor-pointer font-normal py-2 px-3 rounded-md bg-[#F0F0FF]"
              onClick={() => handleTextClick(text)}
            >
              {`${text}`}
            </span>
          ))}
        </div>
        {/* Add more words and paragraphs with onClick handlers */}
      </div>
    </div>
  );
};

export default TextColorizer;
