package com.climatetool.demo.service;

import com.climatetool.demo.entity.Climate;
import com.climatetool.demo.repository.ClimateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClimateService {
    private final ClimateRepository climateRepository;

    public Climate postClimateData(Climate climate) {
        return climateRepository.save(climate);
    }

    public List<Climate> fetchClimateData() {
        return climateRepository.findAll();
    }
}
