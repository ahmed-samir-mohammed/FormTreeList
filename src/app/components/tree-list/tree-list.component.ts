import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeItem } from 'src/app/core/model/TreeItem';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tree-list',
  template: `
    <div class="tree-list">
      <app-tree-item [item]="rootItem"></app-tree-item>
    </div>
  `,
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent {
  rootItem: TreeItem = {
    id: 1,
    name: 'Root',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [
          {
            id: 4,
            name: 'Grandchild 1.1',
          },
          {
            id: 5,
            name: 'Grandchild 1.2',
            children: [
              {
                id: 2,
                name: 'Child 1',
                children: [
                  {
                    id: 4,
                    name: 'Grandchild 1.1',
                  },
                  {
                    id: 5,
                    name: 'Grandchild 1.2',
                  }
                ]
              },
              {
                id: 3,
                name: 'Child 2',
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Child 2',
      }
    ]
  };
}
