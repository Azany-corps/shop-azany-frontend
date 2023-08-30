import * as React from "react";

interface PinCodeProps {
  /**
   * Determines length of input
   * @type number.
   */
  codeLength?: number;
  /**
   * Called on each input change.
   * @type function
   * @param value string value of the input
   * @return void
   */
  onChange?: (value: string) => void;
  /**
   * Called when the input is completely filled.
   * @type function
   * @param value string value of the input
   * @return void
   */
  onCodeComplete: (value: string) => void;
}

const fieldPrefix = "codefield_";

const PinCode: React.FC<PinCodeProps> = ({
  codeLength = 6,
  onCodeComplete,
  onChange,
}) => {
  const [fields, setFields] = React.useState<Array<string>>([]);
  const [code, setCode] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    const inputFields = [];
    for (let i = 0; i < codeLength; i++) {
      inputFields.push(fieldPrefix + i);
    }
    setFields(inputFields);
  }, [codeLength]);

  const stepForward = (i: number) => {
    if (code[fieldPrefix + i] && i !== codeLength - 1) {
      document.getElementById(`${fieldPrefix}${i + 1}`)?.focus();

      setCode((prev) => {
        delete prev[`${fieldPrefix}${i + 1}`];
        return prev;
      });
    }

    checkPin();
  };

  const stepBack = (i: number) => {
    if (i !== 0) {
      setCode((prev) => {
        delete prev[fieldPrefix + i];
        return prev;
      });
      document.getElementById(`${fieldPrefix}${i - 1}`)?.focus();
    }
  };

  const checkPin = () => {
    const valuesArr = Object.values(code).map((values) => values);
    const codeString = valuesArr.join("");

    onChange && onChange(codeString);

    if (valuesArr.length === codeLength) {
      onCodeComplete(codeString);
      document.getElementById(`${fieldPrefix}${codeLength - 1}`)?.blur();
    }
  };

  return (
    <div className="flex gap-[8px] justify-between">
      {fields.map((field, i) => {
        return (
          <input
            id={field}
            key={field}
            autoFocus={i === 0}
            pattern="^\d$"
            maxLength={1}
            type="number"
            onKeyUp={() => stepForward(i)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                stepBack(i);
              }
            }}
            style={{ fontSize: 26 }}
            className="w-[61px] h-[61px] border-gray-300 border shadow_md rounded-[6px] text-center font-medium"
            value={code[field] || ""}
            onChange={(e) => {
              setCode({ ...code, [field]: e.target.value });
            }}
          />
        );
      })}
    </div>
  );
};

export { PinCode };
