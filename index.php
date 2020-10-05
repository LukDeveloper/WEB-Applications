<?php

$pontos = array(
	"- - - - - - - - ",

	"Instituto Canção Nova",
	"Pizzaria do Renato",
	"Padaria Bom Jesus",
	"Praça Prado Filho",
	"Sorveteria Tio João",
	"Chiquinho Sorvetes",
	"Rodoviário Velho",
	"Estação",
	"Copa de Marcha",
	"Parque Ecológico",
	"Mercearia Amorim",
	"Mirante",
	"Estatua",
	"Cervejaria",
	"Clube Literário",
	"INPE",
	"Praça do Parque",
	"CPTEC",
	"Rodoviário Nova",
	"Bar do Araujo"
);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<title>Pontos Turísticos de Cachoeira Paulista-SP</title>
</head>

<body style="margin: 0px">
	<header style="background-color: red; ">
		<nav class="navbar navbar-expand-lg navbar-dark default-color">
			<a class="navbar-brand" href="#" style="font-size: 26px; ">
				<img src="Cachoeirapaulista.png" alt="some text" width=100 height=80 style="margin-right: 40px; margin-left: 150px;"><br>
				<strong>Pontos turísticos - Cachoeira Paulista</strong>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<div class="row" style="width: 100%; margin-left: 0px; padding-left: 20px">
					<div class="col" style="">
						<div class="row" style="">
							<form name="o">
								<label style="font-size: 20px; color: white; margin-right: 4px; margin-left: 18px; font-weight: bold; margin-top: 4px; margin-bottom: 0px; ">Origem: </label>
								<select name="origem" class="form-control" style="width: 220px">
									<?php
									for ($x = 0; $x < sizeof($pontos); $x++) {
										echo "<option>" . $pontos[$x] . "</option>";
									}
									?>
								</select>
							</form>
							<br>
							<form>
								<label style="font-size: 20px; color: white; margin-right: 4px; margin-left: 18px; font-weight: bold; margin-top: 4px; margin-bottom: 0px;">Meio de transporte: </label>
								<select id="mode" class="form-control" style="width: 220px">
									<option value="DRIVING">Dirigindo</option>
									<option value="WALKING">Caminhando</option>
									<option value="BICYCLING">Ciclismo</option>
								</select>
							</form>
						</div>
					</div>
					<div class="col">
						<div class="row">
							<form name="d">
								<label style="font-size: 20px; color: white; margin-right: 4px; margin-left: 18px; font-weight: bold; margin-top: 4px; margin-bottom: 0px">Destino: </label>
								<select name="destino" class="form-control" style="width: 220px">
									<?php
									for ($x = 0; $x < sizeof($pontos); $x++) {
										echo "<option>" . $pontos[$x] . "</option>";
									}
									?>
								</select>
							</form>
						</div>
					</div>
					<div class="col">
						<div class="row">
							<form name="m">
								<label style="font-size: 20px; color: white; margin-right: 4px; margin-left: 18px; font-weight: bold; margin-top: 4px; margin-bottom: 0px">Métodos: </label>
								<select name="metodo" class="form-control" style="width: 180px">
									<option>Amplitude</option>
									<option>Profundidade</option>
									<option>Profundidade Limitada</option>
									<option>Aprofundamento Iterátivo</option>
									<option>Bidirecional</option>
								</select>
							</form>
							<br>
							<form name="li">
								<label style="font-size: 20px; color: white; margin-right: 2px; margin-left: 18px; font-weight: bold; margin-top: 2px; margin-bottom: 0px">Limite:</label>
								<input class="form-control" style="width: 100px" name="limite">
							</form>
						</div>
					</div>
				</div>
				<div class="col" id="exe">
					<button id="executar" onclick="teste()" type="button" class="btn btn-light" style="width: 120px">Executar</button>
				</div>
			</div>
		</nav>
	</header>



	<!--- Google Maps --->
	<div id="map" style="height: 580px; width: 100%"></div>

	<script>
		function teste() {

			var orig = document.o.origem.value;
			var dest = document.d.destino.value;
			var met = document.m.metodo.value;
			var lim = document.li.limite.value;

			var selectedMode = document.getElementById('mode').value;

			if (orig == dest) {
				alert("ORIGEM E DESTINO IGUAIS");
			} else {
				console.log(orig, dest);

				let sol = new Busca();
				let caminho = [];

				if (met == "Amplitude") {
					caminho = sol.amplitude(orig, dest);
					console.log(caminho.reverse()); //TESTE
					alert("CAMINHO: [  " + caminho + "  ]");
				}
				if (met == "Profundidade") {
					caminho = sol.profundidade(orig, dest);
					console.log(caminho.reverse()); //TESTE
					alert("CAMINHO: [  " + caminho + "  ]");
				}
				if (met == "Profundidade Limitada") {
					caminho = sol.profundidadeLimitada(orig, dest, lim);
					console.log(caminho.reverse()); //TESTE
					alert("CAMINHO: [  " + caminho + "  ]");
				}
				if (met == "Aprofundamento Iterátivo") {
					caminho = sol.aprofundamentoIterativo(orig, dest, lim);
					console.log(caminho.reverse()); //TESTE
					alert("CAMINHO: [  " + caminho + "  ]");
				}
				if (met == "Bidirecional") {
					caminho = sol.bidirecional(orig, dest);
					alert("CAMINHO: [  " + caminho + "  ]");
					console.log(caminho);
				}

				var directionsService = new google.maps.DirectionsService();
				var directionsRenderer = new google.maps.DirectionsRenderer();

				var myLatlng = new google.maps.LatLng();

				var myOptions = {
					zoom: 7,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng
				}

				map = new google.maps.Map(document.getElementById("map"), myOptions);
				directionsRenderer.setMap(map);
				directionsRenderer.setPanel(document.getElementById("directionsPanel"));

				var o = orig + " Cachoeira Paulista, São Paulo";
				var d = dest + " Cachoeira Paulista, São Paulo";

				var waypts = [];
				for (var i = 1; i < caminho.length - 1; i++) {
					waypts.push({
						location: caminho[i] + " Cachoeira Paulista, São Paulo",
						stopover: true
					});
				}

				console.log(waypts);

				directionsService.route({
						origin: o,
						destination: d,
						waypoints: waypts,
						optimizeWaypoints: true,
						travelMode: google.maps.DirectionsTravelMode[selectedMode]
					},
					function(response, status) {
						if (status === 'OK') {
							directionsRenderer.setDirections(response);
							var route = response.routes[0];
						} else {
							console.log("ruim");
							alert(status);
						}
						document.getElementById('map').style.visibility = 'visible';
					})
			}
		}
	</script>
	<script data-main="scripts/cadastro" src="scripts/functions.js"></script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0svEJaVyafINHr2DaAtvuuE8NHIrj2AI&callback=initMap"></script>
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>

</html>