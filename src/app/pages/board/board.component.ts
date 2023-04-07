import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Column, ToDo } from '../../models/todo.model';

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
}
