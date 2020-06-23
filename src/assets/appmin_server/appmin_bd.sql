-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2020 at 07:11 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appmin_bd`
--

-- --------------------------------------------------------

--
-- Table structure for table `productos_tb`
--

CREATE TABLE `productos_tb` (
  `id` int(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` tinytext NOT NULL,
  `cantidad` int(10) NOT NULL,
  `v_unidad` int(20) NOT NULL,
  `v_total` int(20) NOT NULL,
  `foto` varchar(120) NOT NULL,
  `anadido` int(11) NOT NULL,
  `tipo` varchar(60) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos_tb`
--

INSERT INTO `productos_tb` (`id`, `nombre`, `descripcion`, `cantidad`, `v_unidad`, `v_total`, `foto`, `anadido`, `tipo`, `categoria`) VALUES
(1, 'HB Artesanal de Res', 'Hamburguesa carne de res, tocineta, jamon, queso, lecucha, ripio y salsas.', 1, 10000, 10000, 'f_hbres.jpg', 0, 'comida', 'hamburguesas'),
(2, 'HB Artesanal de Res', 'Hamburguesa carne de res, tocineta, jamon, queso, lecucha, ripio y salsas.', 1, 10000, 10000, 'f_hbres.jpg', 0, 'comida', 'hamburguesas'),
(3, 'Pizza hawaiana', 'Pizza hawaiana', 1, 12000, 12000, 'p_pizzapp.jpg', 0, 'comida', 'pizzas'),
(4, 'Jugo de lulo', 'jugo de lulo', 1, 6000, 6000, 'f_jugolimoana.jpg', 0, 'bebida', 'jugos'),
(5, 'Gaseosa postobon', 'Gaseosa Postobon', 1, 4000, 4000, 'f_postobon.jpg', 0, 'bebida', 'gaseosas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos_tb`
--
ALTER TABLE `productos_tb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos_tb`
--
ALTER TABLE `productos_tb`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
