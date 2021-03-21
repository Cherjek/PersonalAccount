/**
 * SETTINGS APP FROM REMOTE SERVER
 */
export enum AccessRequestType {
  DISALLOWED,
  ALLOWED,
  ALLOWED_WITH_CONFIRM
}

export class ApplicationInfo {
  accessRequestType: AccessRequestType;
  registrationEnabled: boolean;
  name: string;  
  constructor(options: {
    accessRequestType: AccessRequestType,
    registrationEnabled: boolean,
    name?: string
  }) {
    this.accessRequestType = options.accessRequestType;
    this.name = options.name || '';
    this.registrationEnabled = options.registrationEnabled;
  }
}