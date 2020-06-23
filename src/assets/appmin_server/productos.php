<?php 

require("./conexion.php");

class showData extends conexion{

	public function __construct($tabla){
		parent :: __construct();
		$this->funcion = $_GET['funcion'];
		$this->ejecutarFuncion($tabla);
	}

	public function ejecutarFuncion($tabla){
		if(isset($this->funcion)){
			switch ($this->funcion) {
				case 'get_productos':
					$this->getProductos($tabla);
					break;
				
				default:
					echo "respuesta default de switchcase";
					break;
			}
		}
	}


	public function getProductos($tabla){

		$output = array();
		$query  = "SELECT * FROM $tabla";
		$result = mysqli_query($this->conexion,$query);

		if(mysqli_num_rows($result)>0){
			while ($row = mysqli_fetch_array($result)){
				$output[] = $row;
			}
			echo json_encode($output);
		}else{
			echo "Ocurrió un error";
		}
	}
}
$mostrarProductos= new showData("productos_tb");
 ?>