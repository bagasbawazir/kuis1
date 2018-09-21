import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  username='';

  constructor() { 
    // adalah arow atau fungsi atau lamda
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  
  }

  onCreationStatus(){
    this.serverCreationStatus = 'Server telah dibuat!';
  }

  onUpdateServerName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onReset(){
    this.username='';
  }
}

