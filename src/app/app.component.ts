import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = "";
  fun(x,y){
	if(x=="admin" && y=='123'){
	this.msg = "login success";
	}
	else{
		console.log('x value'+x+'y value'+y);
	this.msg = "login fail";	
	}	
  }
  name="sslabs";
  count=0;
  std=[
  {stdid:123,sname:"swathi",scourse:"web",sdob:new Date("10/10/1988"),sfee:5000},
  {stdid:124,sname:"swetha",scourse:"angular",sdob:new Date("10/05/1989"),sfee:6000},
  {stdid:125,sname:"shravan",scourse:"bootstrap",sdob:new Date("10/10/1987"),sfee:4000},
  {stdid:126,sname:"raju",scourse:"php",sdob:new Date("10/10/1992"),sfee:3000}
  ];
  
}
