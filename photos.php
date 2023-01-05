<!DOCTYPE html>
<html>
	<head>
		<title>Priya's Photo Album</title>
		<style> 
			h1 {
				background-color: turquoise;	
			}
			body {
				background-color: pink;
			} 
		</style>
	</head>
	<body>
		<h1>Priya's Photo Album</h1>
		<ul class="photoitem">
		<?php
			foreach(glob("photo/*.JPEG") as $photo) {
				$photoname = basename($photo);
				$photosize = round((filesize($photo))/1024);
				print "<li><a href=\"$photo\"> $photoname </a> ($photosize KB)</li>";
			}
		?>
		</ul>
	</body>		
</html>
