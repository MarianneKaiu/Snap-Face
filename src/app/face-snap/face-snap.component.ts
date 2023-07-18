import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face_snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Matcho';
    this.description = 'Mon meilleur ami depuis un an et six mois !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh snap !';
  }
  onSnap() {
    if (this.buttonText === 'Oh snap !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops unSnap !';
    } else if (this.buttonText === 'Oops unSnap !') {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap !';
    }
  }
}
