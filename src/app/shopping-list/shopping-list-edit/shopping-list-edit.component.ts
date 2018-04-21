import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.newItem.emit(newIngredient);
  }

}
