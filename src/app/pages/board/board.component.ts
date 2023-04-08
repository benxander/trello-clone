import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { Column, ToDo } from '../../models/todo.model';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted  */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped  */
      .cdk-drop-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class BoardComponent {

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        },
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        },
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video game'
        },
      ]
    }
  ]

  constructor(
    private dialog: Dialog
  ) {}
  drop(e: CdkDragDrop<ToDo[]>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex
      )
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  openDialog(todo: ToDo) {
    const dialogRef =  this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
