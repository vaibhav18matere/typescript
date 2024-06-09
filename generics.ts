const helloWorld = <T>(message: T): T => {
  return message;
};

const e = helloWorld("Samyak");
helloWorld<number>(2);
helloWorld<[]>([]);

const getFirstElement = <T>(arr: T[]) => {
  return arr[0];
};

const el = getFirstElement(["sam", 1]);
