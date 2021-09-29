export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  userType: string;
  photoFilePath: string;
  isBlocked: boolean;
  organization: IUserOrganization;
  university: IUserUniversity;
}

export interface IUserOrganization {
  name: IUserOrganizationName;
}

export interface IUserOrganizationName {
  az: string;
  en: string;
  ru: string;
}

export interface IUserUniversity {
  name: IUserOrganizationName;
  logo: IUserUniversityLogo;
  description: string;
}

export interface IUserUniversityLogo {
  contentType: any;
  createUser: any;
  fileSize: any;
  id: any;
  originalName: any;
  path: any;
}
