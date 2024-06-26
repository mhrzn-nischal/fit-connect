<?php
   $srever = "localhost";
   $username = " root";
   $password = "";
   $dbname = "name";
   $port = 1000;

   $conn = new mysqli($srever,$username,$password,$dbname,$port);

   if($conn -> connect_error){
     die ( "connection error ". $conn -> connect_error);
   }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> practice</title>
</head>
<body>
     <input type="text">

</body>
</html>