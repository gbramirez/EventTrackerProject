-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pregnancydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pregnancydb` ;

-- -----------------------------------------------------
-- Schema pregnancydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pregnancydb` DEFAULT CHARACTER SET utf8 ;
USE `pregnancydb` ;

-- -----------------------------------------------------
-- Table `pregnancy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pregnancy` ;

CREATE TABLE IF NOT EXISTS `pregnancy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `weeks` INT NOT NULL,
  `milestones` VARCHAR(45) NULL,
  `due_date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS pregnantuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'pregnantuser'@'localhost' IDENTIFIED BY 'pregnantuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'pregnantuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pregnancy`
-- -----------------------------------------------------
START TRANSACTION;
USE `pregnancydb`;
INSERT INTO `pregnancy` (`id`, `weeks`, `milestones`, `due_date`) VALUES (1, 1, NULL, NULL);

COMMIT;

