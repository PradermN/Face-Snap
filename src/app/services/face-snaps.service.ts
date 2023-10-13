import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Water, my element',
            description: 'Nature',
            imageUrl: 'assets/paysage1.jpg',
            createdDate: new Date(),
            snaps: 374
        },
        {
            id: 2,
            title: 'Choupidou',
            description: 'My best friend since I was little',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 18,
            location: 'paris'
        },
        {
            id: 3,
            title: 'Three Rock Mountain',
            description: 'A very nice place for hiking.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 27,
            location: 'The mountain'
        },
        {
            id: 4,
            title: 'A good and healthy meal',
            description: 'Mmmh it is so tasty!',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 101
        },
        {
            id: 5,
            title: 'Afrcan women',
            description: 'Culture',
            imageUrl: 'assets/portrait5.jpg',
            createdDate: new Date(),
            snaps: 500
        }
        
    ]

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    
}
