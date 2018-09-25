import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { AgePipe } from './age.pipe';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomdDirective } from './customd.directive';
import { PagePipe } from './page.pipe';
const routes:Routes=[
	{path:"",redirectTo:"sample",pathMatch:"full"},
	{path:"sample",component:SampleComponent},
	{path:"about",component:AboutComponent},
	{path:"contact",component:ContactComponent},
	{path:"**",redirectTo:"sample"},
];
@NgModule({
  declarations: [
    AppComponent,
   SampleComponent,
   DemoComponent,
   AgePipe,
   AboutComponent,
   ContactComponent,
   CustomdDirective,
   PagePipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
