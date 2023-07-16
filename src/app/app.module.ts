import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {TodoState} from "./todo/state/todo-state";
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { MaterialModule } from './todo/material/material.module';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TodoState], {}),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
