export class StringUtils {
  /**
   * name
   */
  public toUpperCase(arg: string) {
    if (!arg) throw new Error("Invalid argument");

    return toUpperCase(arg);
  }
}
/* istanbul ignore next */
export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Object;
};

/* istanbul ignore next */
export function getStringInfo(arg: string) {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
