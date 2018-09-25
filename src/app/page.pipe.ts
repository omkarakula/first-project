import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {
	
  transform(value: any): any {
   let currentYear=new Date().getFullYear();//2018
	let dobyear=new Date(value).getFullYear();
	let currentAge=currentYear-dobyear;
   return currentAge;
  }

}
