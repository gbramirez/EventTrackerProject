package com.skilldistillery.pregnancyapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pregnancy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int weeks;

	private String milestones;

	@Column(name = "due_date")
	private String dueDate;

	public Pregnancy() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getWeeks() {
		return weeks;
	}

	public void setWeeks(int weeks) {
		this.weeks = weeks;
	}

	public String getMilestones() {
		return milestones;
	}

	public void setMilestones(String milestones) {
		this.milestones = milestones;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Pregnancy [id=").append(id).append(", weeks=").append(weeks).append(", milestones=")
				.append(milestones).append(", dueDate=").append(dueDate).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pregnancy other = (Pregnancy) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
