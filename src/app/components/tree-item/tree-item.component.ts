import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeItem } from 'src/app/core/model/TreeItem';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent {
  @Input() item: TreeItem | any;
  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // السحب والإسقاط داخل نفس القائمة
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // السحب والإسقاط بين قوائم مختلفة
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
