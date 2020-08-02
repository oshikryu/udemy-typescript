import { User } from './User';
import { Company } from './Company';

// instructions to every other class to be an argument to 'addMarker'
// not going to enforce the correct string, just the type
export interface Mappable {
  location: {
    lat: number,
    lng: number,
  };
  markerContent(): string;
  color?: string;
}

export class CustomMap {
  // anyone outside of the class can call it if public
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = 
      new google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        }
      });
  }

  //addMarker(mappable: User | Company): void {
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
