<!-- Initially written by Rahul Raturi and Rohan Jaswal-->
<!-- ©CSEC-NITH-->
<html>
<head>
	<link href="/css/main.css" type="text/css" rel="stylesheet">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <meta name="description" content="CSEC is the departmental club of Computer Science and Engineering Department of National Institute of Technology, Hamirpur. CSEC stands for Computer Science Engineers Community. The website brings to you the treasure of computer science knowledge.">
  <meta name="keywords" content="CSEC, csec, computer science, CSE, CSENITH, departmental club, CSE departmental Club">
   <meta name="author" content="CSEC-NITH">
</head>
	<div class="header">
		<div class="logo"><img src='/images/imes.jpeg'/></div>
		<h2>Computer Science Engineers Community</h2>
	</div>
		<ul class="parent_list" id="navbar">
			<li><a href="../index.php">Home</a></li>
			<li><a href="/pages/cons.php" >About</a></li>
			<li><a href="/pages/activities.php" >Activities</a></li>
			<ul class="nested_list">
				<li><a href="/pages/activities.php" >C lectures</a></li>
				<li><a href="/pages/activities.php" >Codemons</a></li>
				<li><a href="/pages/activities.php" >Web development</a></li>
				<li><a href="/pages/activities.php" >Python</a></li>
				<li><a href="/pages/activities.php" >Workshops</a></li>
			</ul>
			<li><a href="../pages/cons.php" target="MAIN">Members</a></li>
			<ul class="nested_list">
				<li><a href="../pages/final.php" >Final Year</a></li>
				<li><a href="../pages/third.php" >Third Year</a></li>	
				<li><a href="../pages/second_yr.php">Second Year</a></li>
				<li><a href="../pages/cons.php">First Year</a></li>
			</ul>
			<li><a href="../pages/cons.php">Contact Us</a></li>
			<?php
			$rem_ip=getenv('REMOTE_ADDR');
			//echo $rem_ip;
			$ip= substr($rem_ip,0,7);
			if($ip=="172.16."){
				echo '<li><a href="../pages/cons.php" target="MAIN">Tutorials</a></li>';
			}
			?>
		</ul>
	</div>
	<ul id="social_links">
    	<li><a href="https://www.facebook.com/pages/CSEC-Computer-Science-Engineers-Community/1496888247232617?ref=hl" target="_blank"><img src="/images/facebook.png" alt="" /></a></li>
    	<li><a href="https://twitter.com/csecnith" target="_blank"><img src="/images/twitter.png" alt="" /></a></li>
    	<li><a href="http://social.link/" target="_blank"><img src="/images/email.png" alt="" /></a></li>
	    <li><a href="https://github.com/CSEC-NITH/" target="_blank"><img src="/images/github.png" alt="" /></a></li>
	    <li><a href="http://social.link/" target="_blank"><img src="/images/quora.png" alt="" /></a></li>
	    <li><a href="https://plus.google.com/u/0/104484102243545712040/about" target="_blank"><img src="/images/google-plus.png"/></a></li>
	</ul>
	<!--<?php
		$count2 = fopen("./counter.txt", "r");
		$counter = (int ) fread($count2,20);
		//echo "Total Visits:"; echo $counter;
	?>-->
</html>

