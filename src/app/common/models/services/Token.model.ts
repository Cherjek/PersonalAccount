export class Token {
  accessToken: string;
  expires: Date | string;
  issued: Date;
  expiresIn: number;  
  refreshToken: string;
  tokenType: string;
  constructor(options: {
    accessToken: string;
    expires: Date | string;
    issued: Date;
    expiresIn: number;  
    refreshToken: string;
    tokenType: string;
  }) {
    this.accessToken = options.accessToken;
    this.expires = options.expires;
    this.expiresIn = options.expiresIn;
    this.issued = options.issued;
    this.refreshToken = options.refreshToken;
    this.tokenType = options.tokenType;
  }
}