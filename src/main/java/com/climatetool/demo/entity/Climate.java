package com.climatetool.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "climateanalysis")
public class Climate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long objectId;
    private String country;
    private String iso2;
    private String iso3;
    private float f1961;
    private float f1962;
    private float f1963;
    private float f1964;
    private float f1965;
    private float f1967;
    private float f1968;
    private float f1969;
    private float f1970;
    private float f1971;
    private float f1972;
    private float f1973;
    private float f1974;
    private float f1975;
    private float f1976;
    private float f1977;
    private float f1978;
    private float f1979;
    private float f1980;
    private float f1981;
    private float f1982;
    private float f1983;
    private float f1984;
    private float f1985;
    private float f1986;
    private float f1987;
    private float f1988;
    private float f1989;
    private float f1990;
    private float f1991;
    private float f1992;
    private float f1993;
    private float f1994;
    private float f1995;
    private float f1996;
    private float f1997;
    private float f1998;
    private float f1999;
    private float f2001;
    private float f2002;
    private float f2003;
    private float f2004;
    private float f2005;
    private float f2006;
    private float f2007;
    private float f2008;
    private float f2009;
    private float f2010;
    private float f2011;
    private float f2012;
    private float f2013;
    private float f2014;
    private float f2015;
    private float f2016;
    private float f2017;
    private float f2018;
    private float f2019;
    private float f2020;
    private float f2021;
    private float f2022;
}
