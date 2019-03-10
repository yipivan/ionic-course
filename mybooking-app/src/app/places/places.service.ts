import { Injectable } from '@angular/core'
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'http://lorempixel.com/400/400/city',
      149
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'Romantic place in Paris',
      'http://lorempixel.com/400/400/city',
      189.99
    ),
    new Place(
      'p3',
      'Lost forest',
      'Quiet suburb',
      'http://lorempixel.com/400/400/city',
      89.99
    )
  ]

  get places() {
    return [...this._places]
  }

  constructor() {}
}
