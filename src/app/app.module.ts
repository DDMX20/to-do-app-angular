import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';
import { ProjectTabComponent } from './project-tab/project-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SideDrawerComponent,
    TopNavComponent,
    TodoListContainerComponent,
    ProjectTabComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
