package com.skilldistillery.pregnancyapp.services;

import com.skilldistillery.pregnancyapp.entities.Pregnancy;

import java.util.*;

public interface PregnancyService {

	List<Pregnancy> allPregnancies();

	Pregnancy show(int id);

	Pregnancy create(Pregnancy preg);

	Pregnancy update(Pregnancy preg);

	boolean delete(int id);
	
}
