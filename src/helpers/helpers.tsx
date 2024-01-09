interface FormattedDate {
  dayOfWeek: string;
  dayOfMonth: number;
  month: string;
  year: number;
}

export function formatDate(inputDate: string): FormattedDate {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date: Date = new Date(inputDate);
  const dayOfWeek: string = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];
  const dayOfMonth: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();

  const formattedDate: FormattedDate = {
    dayOfWeek,
    dayOfMonth,
    month,
    year,
  };

  return formattedDate;
}

export const modifyObject = (inputObject: { [key: string]: string }) => {
  const keys: string[] = Object.keys(inputObject);
  const values: string[] = Object.values(inputObject);

  // Create a new object by pairing keys and values
  const resultObject: { [key: string]: string } = {};
  for (let i = 0; i < keys.length; i += 2) {
    const key: string = values[i];
    const value: string = values[i + 1];
    resultObject[key] = value;
  }

  return resultObject;
};

export const modifyObjectForCheck = (inputObject: {
  [key: string]: string;
}) => {
  const keys: string[] = Object.keys(inputObject);

  const resultObject: { [key: string]: boolean } = {};
  for (let i = 0; i < keys.length; i += 1) {
    const key: string = keys[i];
    const value: boolean = true;
    resultObject[key] = value;
  }

  return resultObject;
};

interface ConvertedObject {
  id: number;
  name: string;
  items: string[];
}

export function convertToObjectArray(
  input: Record<string, string>
): ConvertedObject[] {
  return Object.entries(input).map(([name, values], id) => {
    const items = values.split(",").map((item) => item.trim());
    return {
      id: id + 1,
      name: name.toLowerCase(),
      items,
    };
  });
}
