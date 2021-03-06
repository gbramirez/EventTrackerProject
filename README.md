# Event Tracker Project

### Full-stack Spring/REST/JPA Project for Skill Distillery

## Overview
Pregnancy Tracker is a gender-neutral pregnancy tracking app. <br> 
Users can track a pregnancy via weeks and milestones. <br>
The tracker allows the ability to create, update, and delete items from the database. <br>

### Technologies

* [Eclipse](https://www.eclipse.org/ide/)</br>
* [Git](https://git-scm.com/)</br>
* [Java](https://en.wikipedia.org/wiki/Java_)</br>
* [MySQL](https://www.mysql.com/)</br>
* [Object-Oriented design](https://stackabuse.com/object-oriented-design-principles-in-java)</br>
* [PostMan](https://www.postman.com/)<br>
* [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework#Spring_Boot)<br>
* [Unix Terminal](https://en.wikipedia.org/wiki/Unix_shell)</br>

## REST Endpoints

| Method |        URI            |  Request Body    |         Response Body            |
|--------|-----------------------|------------------|----------------------------------|
| GET    |`/api/pregnancies/{id}`| List Pregnancies |  Displays all pregnancies in db  |
|--------|-----------------------|------------------|----------------------------------|
| POST   |   `/api/pregnancy`    | Create pregnancy | Add a pregnancy to the db        |
|--------|-----------------------|------------------|----------------------------------|
| PUT    |   `/api/pregnancy`    | Edit pregnancy   | Edit a pregnancy in the db       |
|--------|-----------------------|------------------|----------------------------------|
| DELETE |   `/api/pregnancy`    | Delete pregnancy | Remove a pregnancy from the db   |
|--------|-----------------------|------------------|----------------------------------|

## How to Run
* The user can view all current pregnancies from the homepage.
* The user can view the weeks, milestones, and due date of each pregnancy by selection.
* The user can update the pregnancy from the view form.
* The user can create a pregnancy using the form on the homepage.
* The user can delete a pregnancy from the database from the view form.

## Lessons Learned
* How to utilize Postman as a development tool.
* Practice with CRUD implementations via MySQL Workbench.
* Working with SPRING.
* Working with REST.
