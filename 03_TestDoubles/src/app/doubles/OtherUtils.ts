export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Object;
};

type LoggerServiceCallbak = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: LoggerServiceCallbak) {
  // cb -> calls logs in the bg
  if (!arg) {
    callback("Invalid argument");
    return;
  }
  callback(`called another funcntion with ${arg}`);

  return arg.toUpperCase();
}
