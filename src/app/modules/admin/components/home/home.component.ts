import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public length: any
  mobileArr: any[] = [];
  mobile: any = {
    id: 0,
    itemname: ''
  };
  isSelected: boolean = false

  constructor() { }

  menuShow: boolean = false;

  showMenu() {
    this.menuShow = !this.menuShow;
  }
  ngOnInit(): void {
    // const data=JSON.parse(localStorage.getItem('crud') ||'')
    const data = localStorage.getItem('crud')
    if (data != null) {
      this.mobileArr = JSON.parse(data)
    }
  }
  add() {
    const notNull = document.getElementById('category');
    if (notNull != null) {
      notNull.style.display = 'block'

    }
    this.mobile = {
      id: 0,
      itemname: ''
    };
  }

  onCloseModel() {
    const notNull = document.getElementById('category');
    if (notNull != null) {
      notNull.style.display = 'none'
    }
  }


  onEdit(category: any) {
    this.add()
    this.mobile = category


  }

  save(data: any) {
    // debugger
    this.mobile.id = this.mobileArr.length + 1
    localStorage.setItem('index', JSON.stringify(this.mobile.id))

    this.mobileArr.push(this.mobile)

    this.mobile = {
      id: 0,
      itemname: ''
    };
    localStorage.setItem('crud', JSON.stringify(this.mobileArr))
    this.onCloseModel()
  }


  onupdate() {
    const update = this.mobileArr.find(m => m.id == this.mobile.id)
    update.itemname = this.mobile.itemname
    localStorage.setItem('crud', JSON.stringify(this.mobileArr))
    this.onCloseModel()
  }

  onremove(id: number) {
    for (let i = 0; i < this.mobileArr.length; i++) {
      if (this.mobileArr[i].id == id) {
        this.mobileArr.splice(i, 1)
      }
    }
    localStorage.setItem('crud', JSON.stringify(this.mobileArr))
    window.location.reload();
  }


  onCheckall() {
    for (let i = 0; i < this.mobileArr.length; i++) {
      this.mobileArr[i].isChecked = this.isSelected
    }
  }
}


