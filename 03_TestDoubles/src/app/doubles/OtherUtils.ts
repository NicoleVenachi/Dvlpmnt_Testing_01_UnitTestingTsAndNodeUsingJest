import { v4 } from "uuid";

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

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}

export class OtherStringUtils {
  public callExternalService() {
    console.log("Calling external Service!!!");
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
