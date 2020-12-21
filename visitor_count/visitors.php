<?php
print "<h2><canter>welcom to the website</canter></h2>"
$fh=fopen($fname,"r");
$count=fread($fh,"%d");
$count[0]++;
$fh=fopen($fname,"w");
fprintf($fh,"%d",$count[0]);
fclose($fh)
print "<h3><center>number of visitors=</center></h3>".$count[0];
?>