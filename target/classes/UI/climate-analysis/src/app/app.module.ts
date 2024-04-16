import  { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { PostClimateComponent } from "./components/post-climate/post-climate.component";
import { GetAllClimateComponent } from "./components/get-all-climate/get-all-climate.component";
import { UpdateClimateComponent } from "./components/update-climate/update-climate.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
      AppComponent,
      PostClimateComponent,
      GetAllClimateComponent,
      UpdateClimateComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
