<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="refresh" content="2">

</head>
<body>
<div class="clock">
<p>
time is:
<?php
date_default_timezone_set("Asia/Kolkata");
echo date("H: i :s a")
?>
</p>
</div>
</body>
</html>