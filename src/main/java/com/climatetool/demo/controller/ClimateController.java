package com.climatetool.demo.controller;

import com.climatetool.demo.entity.Climate;
import com.climatetool.demo.service.ClimateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "/api")
@RequiredArgsConstructor
@CrossOrigin("localhost://4200")
public class ClimateController {
    private final ClimateService climateService;

    @GetMapping(name = "/climate/{id}")
    public List<Climate> fetchClimateData() {
        return climateService.fetchClimateData();
    }

    @PostMapping(name = "/climate")
    public Climate postClimateData(@RequestBody Climate climate) {
        return climateService.postClimateData(climate);
    }
}
