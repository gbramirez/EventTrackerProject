package com.skilldistillery.pregnancyapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.pregnancyapp.entities.Pregnancy;
import com.skilldistillery.pregnancyapp.repositories.PregnancyRepository;

import java.util.*;

@Service
public class PregnancyServiceImpl implements PregnancyService {

	@Autowired
	private PregnancyRepository repo;

	@Override
	public List<Pregnancy> allPregnancies() {
		return repo.findAll();
	}

	@Override
	public Pregnancy show(int id) {
		Optional<Pregnancy> preg = repo.findById(id);
		if (preg.isPresent()) {
			return preg.get();
		}
		return null;
	}

	@Override
	public Pregnancy create(Pregnancy preg) {
		repo.saveAndFlush(preg);
		return preg;
	}

	@Override
	public Pregnancy update(Pregnancy preg) {
		repo.saveAndFlush(preg);
		return preg;
	}

	@Override
	public boolean delete(int id) {
		repo.deleteById(id);
		return !repo.existsById(id);
	}

}
