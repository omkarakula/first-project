import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
	users:any;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
	  
	  this.usersService.getAllUsers().subscribe((data)=>{
		  this.users=data;
	  });
  }

}
