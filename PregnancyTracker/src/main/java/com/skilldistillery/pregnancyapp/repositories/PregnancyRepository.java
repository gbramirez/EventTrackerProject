package com.skilldistillery.pregnancyapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.pregnancyapp.entities.Pregnancy;

public interface PregnancyRepository extends JpaRepository<Pregnancy, Integer> {

}
