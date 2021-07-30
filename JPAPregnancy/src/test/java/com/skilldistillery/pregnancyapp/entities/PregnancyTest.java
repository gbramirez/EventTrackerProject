package com.skilldistillery.pregnancyapp.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PregnancyTest {

	private static EntityManagerFactory emf;
	private EntityManager em;

	private Pregnancy preg;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAPregnancy");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		preg = em.find(Pregnancy.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		preg = null;
	}

	@Test
	void test() {
		assertNotNull(preg);
		assertEquals(1, preg.getWeeks());
	}

}