import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClimateService} from "../../service/climate.service";

@Component({
  selector: 'app-post-climate',
  standalone: true,
  imports: [],
  templateUrl: './post-climate.component.html',
  styleUrl: './post-climate.component.css'
})
export class PostClimateComponent {

  postClimateForm: FormGroup;

  constructor(private climateService:ClimateService,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.postClimateForm = this.fb.group({
      country: [null, [Validators.required]],
      iso2: [null, [Validators.required]],
      iso3: [null, [Validators.required]],
      f1961: [null],
      f1962: [null],
      f1963: [null],
      f1964: [null],
      f1965: [null],
      f1966: [null],
      f1967: [null],
      f1968: [null],
      f1969: [null],
      f1970: [null],
      f1971: [null],
      f1972: [null],
      f1973: [null],
      f1974: [null],
      f1975: [null],
      f1976: [null],
      f1977: [null],
      f1978: [null],
      f1979: [null],
      f1980: [null],
      f1981: [null],
      f1982: [null],
      f1983: [null],
      f1984: [null],
      f1985: [null],
      f1986: [null],
      f1987: [null],
      f1988: [null],
      f1989: [null],
      f1990: [null],
      f1991: [null],
      f1992: [null],
      f1993: [null],
      f1994: [null],
      f1995: [null],
      f1996: [null],
      f1997: [null],
      f1998: [null],
      f1999: [null],
      f2001: [null],
      f2002: [null],
      f2003: [null],
      f2004: [null],
      f2005: [null],
      f2006: [null],
      f2007: [null],
      f2008: [null],
      f2009: [null],
      f2010: [null],
      f2011: [null],
      f2012: [null],
      f2013: [null],
      f2014: [null],
      f2015: [null],
      f2016: [null],
      f2017: [null],
      f2018: [null],
      f2019: [null],
      f2020: [null],
      f2021: [null],
      f2022: [null]
    })
  }

  postClimate() {
    console.log(this.postClimateForm.value);
    this.climateService.postClimate(this.postClimateForm.value).subscribe((res) => {
      console.log(res);
    })
  }
}
