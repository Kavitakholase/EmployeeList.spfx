import * as React from 'react';
//import styles from './EmployeeListSpfx.module.scss';
import { IEmployeeListSpfxProps } from './IEmployeeListSpfxProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { 
  SPHttpClient, 
  SPHttpClientResponse, 
  } 
  from '@microsoft/sp-http';  
//import styles from './EmployeeListSpfx.module.scss';

  interface IEmployeelistItem{

    Title:string;
    Address: string;
    BirthDate: any;
    ID: number;
  }
interface IAllItem{
  AllEmployee: IEmployeelistItem[];
}

export default class EmployeeListSpfx extends React.Component<IEmployeeListSpfxProps, 
IAllItem  
 > 
 {
componentDidMount(): void {
 alert("Componet Did  mount called..");
  console.log("First call...");
 this.getAllEmployeeDetail();
}

public getAllEmployeeDetail= () =>{
  console.log("this is Employee Detail function");

 // https://slb6p.sharepoint.com/sites/SPFX1/Lists/Employee1
let listURL = this.props.SiteAbsoluteURL + "/_api/lists/getbytitle('Employee1')/item";
console.log(listURL);

this.props.context.spHttpClient.get(
  listURL,SPHttpClient.configurations.v1)  
      .then((response: SPHttpClientResponse) => {  
        response.json().then((responseJSON: any) => {  
          console.log(responseJSON);  
        });  
      });  
};
  public render(): React.ReactElement<IEmployeeListSpfxProps> {
    return (

   <div>
     <h1>day1</h1>
     </div>
    );
  }
}
