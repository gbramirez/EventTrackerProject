package com.skilldistillery.pregnancyapp.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.pregnancyapp.entities.Pregnancy;
import com.skilldistillery.pregnancyapp.services.PregnancyService;

@RequestMapping("api")
@RestController
public class PregnancyController {

	@Autowired
	private PregnancyService svc;

	@GetMapping("pregnancies")
	public List<Pregnancy> listPregnancies() {
		return svc.allPregnancies();
	}

	@GetMapping("pregnancies/{id}")
	public Pregnancy showPregnancy(@PathVariable int id) {
		return svc.show(id);
	}

	@PostMapping("pregnancy")
	public Pregnancy createPregnancy(@RequestBody Pregnancy preg) {
		return svc.create(preg);
	}

	@PutMapping("pregnancy")
	public Pregnancy updatePregnancy(@RequestBody Pregnancy preg) {
		return svc.update(preg);
	}

	@DeleteMapping("pregnancy/{id}")
	public String deletePregnancy(@PathVariable int id, HttpServletResponse res) {
		try {
			boolean deleted = svc.delete(id);
			if (deleted) {
				res.setStatus(204);
				return "Deleted";
			} else {
				res.setStatus(404);
				return "Not Found";
			}
		} catch (Exception e) {
			res.setStatus(400);
			return "Failed to Delete";
		}
	}

}
