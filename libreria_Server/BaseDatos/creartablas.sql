
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema libreriacyl
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema libreriacyl
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `libreriacyl` DEFAULT CHARACTER SET utf8 ;
USE `libreriacyl` ;

-- -----------------------------------------------------
-- Table `libreriacyl`.`precio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `libreriacyl`.`precio` (
  `idprecio` INT NOT NULL AUTO_INCREMENT,
  `importePrecio` DECIMAL(10,2) UNSIGNED ZEROFILL NOT NULL,
  PRIMARY KEY (`idprecio`))
ENGINE = InnoDB
AUTO_INCREMENT = 46981
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `libreriacyl`.`articulos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `libreriacyl`.`articulos` (
  `idarticulos` INT NOT NULL AUTO_INCREMENT,
  `descripcionArticulos` VARCHAR(100) NOT NULL,
  `precio_idprecio` INT NOT NULL,
  PRIMARY KEY (`idarticulos`),
  INDEX `fk_articulos_precio1_idx` (`precio_idprecio` ASC) VISIBLE,
  CONSTRAINT `fk_articulos_precio1`
    FOREIGN KEY (`precio_idprecio`)
    REFERENCES `libreriacyl`.`precio` (`idprecio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 46981
DEFAULT CHARACTER SET = utf8mb3;



-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
-- select * from cliente
