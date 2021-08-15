package com.skilldistillery.pregnancyapp.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin({ "*", "http://localhost:4210" })
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

	@PostMapping("pregnancies")
	public Pregnancy createPregnancy(@RequestBody Pregnancy pregnancy, HttpServletResponse res, HttpServletRequest req) {
		pregnancy = svc.create(pregnancy);
		try {
			if(pregnancy == null) {
				res.setStatus(404);
			}else {
				res.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/").append(pregnancy.getId());
				res.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			res.setStatus(400);
			pregnancy = null;
		}
		return pregnancy;
	}

	@PutMapping("pregnancies")
	public Pregnancy updatePregnancy(@RequestBody Pregnancy pregnancy, HttpServletResponse res) {
		try {
			pregnancy = svc.update(pregnancy);
		} catch (Exception e) {
			pregnancy = null;
		}
		if (pregnancy == null) {
			res.setStatus(404);
		}
		return pregnancy;
	}

	@DeleteMapping("pregnancies/{id}")
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
