import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    imports: [BrowserModule, CommonModule, FormsModule, SharedModule],
    exports: [TasksComponent]
})
export class TasksModule {

}