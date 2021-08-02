# Event Tracker Project

### Full-stack Spring/REST/JPA Project for Skill Distillery

## Overview
Pregnancy Tracker is a gender-neutral pregnancy tracking app. Users can track a pregnancy via weeks and milestones.

### Technologies
* [Java](https://en.wikipedia.org/wiki/Java_)</br>
* [Object-Oriented design](https://stackabuse.com/object-oriented-design-principles-in-java)</br>
* [Eclipse](https://www.eclipse.org/ide/)</br>
* [Git](https://git-scm.com/)</br>
* [Unix Terminal](https://en.wikipedia.org/wiki/Unix_shell)</br>
* [MySQL](https://www.mysql.com/)</br>
* [Spring Framework](https://en.wikipedia.org/wiki/Spring_Framework#Spring_Boot)<br>
* [MVC / Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)<br>

## REST Endpoints

| Method |     URI            |  Request Body    |         Response Body            |
|--------|--------------------|------------------|----------------------------------|
| GET    | `/api/pregnancy`   |   View pregnancy |    Displays a selected pregnancy |
|--------|--------------------|------------------|----------------------------------|
| GET    | `/api/pregnancies` | List Pregnancies |  Displays all pregnancies in db  |
|--------|--------------------|------------------|----------------------------------|
| POST   | `/api/pregnancy`   | Create pregnancy | Add a pregnancy to the db        |
|--------|--------------------|------------------|----------------------------------|
| PUT    | `/api/pregnancy`   | Edit pregnancy   | Edit a pregnancy in the db       |
|--------|--------------------|------------------|----------------------------------|
| DELETE | `/api/pregnancy`   | Delete pregnancy | Remove a pregnancy from the db   |
|--------|--------------------|------------------|----------------------------------|

## Lessons Learned
* How to utilize Postman as a development tool.
* Practice with CRUD implementations via MySQL Workbench
