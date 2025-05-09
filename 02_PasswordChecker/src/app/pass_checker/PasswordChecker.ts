export enum PasswordErrors {
  SHORT = "Password is to short!",
  NO_UPPER_CASE = "Upper case letter required!",
  NO_LOWER_CASE = "Lower case letter required!",
}

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {
  reasons: PasswordErrors[] = [];

  public checkPassword(password: string): CheckResult {
    if (password.length < 8) {
      this.reasons.push(PasswordErrors.SHORT);
    }
    if (password.toLowerCase() === password) {
      this.reasons.push(PasswordErrors.NO_UPPER_CASE);
    }
    if (password.toUpperCase() === password) {
      this.reasons.push(PasswordErrors.NO_LOWER_CASE);
    }

    console.log({
      valid: this.reasons.length > 0 ? false : true,
      reasons: this.reasons,
      password,
    });

    return {
      valid: this.reasons.length > 0 ? false : true,
      reasons: this.reasons,
    };
  }
}
