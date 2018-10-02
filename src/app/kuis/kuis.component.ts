import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../sharedkuis/mahasiswa';

@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  nim = '';
  nama = '';
  alamat = '';
  daftarMhs: Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }
  
  tambahMhs(){
    this.mhs = new Mahasiswa(this.nim, this.nama, this.alamat);
    this.daftarMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.alamat = '';
  }

}
