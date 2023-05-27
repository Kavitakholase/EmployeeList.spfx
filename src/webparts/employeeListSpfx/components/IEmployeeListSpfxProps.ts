import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IEmployeeListSpfxProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
//Ganeral url
SiteAbsoluteURL:string;
SiteTitle:string;

//getUserName:string;
//getUserAge:number;
//getUsercar:any;
//IsMarried:boolean;
//
  listName: string;
  context: WebPartContext;
}
