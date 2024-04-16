package com.climatetool.demo.repository;

import com.climatetool.demo.entity.Climate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClimateRepository extends JpaRepository<Climate, Long> {
}
