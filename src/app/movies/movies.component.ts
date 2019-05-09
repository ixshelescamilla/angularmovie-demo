import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesService } from './movies.service';

// Models
// import { MovieShort } from './movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchField: any;
  searchList: Array<any>;
  totalResults: Number;

  constructor(private movies$: MoviesService) { }

  ngOnInit(): void {
    this.searchField = new FormControl('');
    this.movies$.getMoviesByPopularity().subscribe(res => {
      this.searchList = res.results;
    });
  }

  search() {
    
    this.movies$.getSearch(this.searchField.value).subscribe((res: any) => {
      this.searchList = res.results;
      this.totalResults = res.totalResults;
      console.log(this.searchList)
    });
  }

}
