export {};
declare global {
  interface Document {
    myName: string;
  }
}

interface MyAppDocument extends Document {
  app: string;
  version: number;
}

document.myName = "abc";
(document as MyAppDocument).app = "TEST_APP";
(document as MyAppDocument).version = 25;

interface MyAttribute {
  name: string;
  age: number;
  gender: unknown;
}

const myAttribute: MyAttribute = {
  name: "lee",
  age: 111,
  gender: "male",
};

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
const toUpperCaseString = (value: unknown): string | undefined => {
  if (isString(value)) {
    return value.toUpperCase();
  }
  return undefined;
};
console.log(toUpperCaseString(myAttribute.gender));
