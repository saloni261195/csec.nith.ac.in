<script type="text/javascript" language="javascript">

	/***********************************************
	* Cross browser Marquee II-  Dynamic Drive (www.dynamicdrive.com)
	* This notice MUST stay intact for legal use
	* Visit http://www.dynamicdrive.com/ for this script and 100s more.
	***********************************************/

	var delayb4scroll=1000; //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
	var marqueespeed=1; //Specify marquee scroll speed (larger is faster 1-10)
	var pauseit=1; //Pause marquee onMousever (0=no. 1=yes)?
	var tim;

	////NO NEED TO EDIT BELOW THIS LINE////////////

	var copyspeed=marqueespeed;
	var pausespeed=(pauseit==0)? copyspeed: 0;
	var actualheight='';

	function scrollmarquee(){
		//document.write(parseInt(cross_marquee.style.top));
		//if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)) {
		if (document.getElementById('track').value == "") {
			if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)) {
				cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px";
				//alert(actualheight);
			}
			else {
				//alert(parseInt(marqueeheight));
				cross_marquee.style.top=parseInt(marqueeheight)-8+"px";
			}
		}
	}

	//press down
	function pressdown() {
		document.getElementById('track').value = "yes";
			if (parseInt(cross_marquee.style.top)<(actualheight)) {
				cross_marquee.style.top=parseInt(cross_marquee.style.top)+ 10 +"px";
				//alert(parseInt(cross_marquee.style.top) + "---" + actualheight + " marqueeheight: " + parseInt(marqueeheight) );
				//alert(actualheight);
				tim = setTimeout("pressdown()", 150);
			}
			else {
				//alert(parseInt(marqueeheight));
				cross_marquee.style.top=parseInt(marqueeheight)*(-1)+"px";
				tim = setTimeout("pressdown()", 150);
			}
	}



	//press up

	function pressup() {

		document.getElementById('track').value = "yes";

		//cross_marquee.style.top=parseInt(cross_marquee.style.top)+10+"px";

		//alert(document.getElementById('track').value);



			if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)) {

				cross_marquee.style.top=parseInt(cross_marquee.style.top)-10 +"px";

				//alert(parseInt(cross_marquee.style.top) + "---" + actualheight + " marqueeheight: " + parseInt(marqueeheight) );

				//alert(actualheight);

				tim = setTimeout("pressup()", 150);

			}

			else {



				cross_marquee.style.top=parseInt(marqueeheight)-8+"px";

				tim = setTimeout("pressup()", 150);

				//alert(cross_marquee.style.top);

			}

	}



	//on mouse out

	function mouse_out() {

		document.getElementById('track').value = "";

		clearTimeout(tim);

		//alert(document.getElementById('track').value);

		scrollmarquee;

	}



	//init()

	function initializemarquee(){

		cross_marquee=document.getElementById("vmarquee");

		cross_marquee.style.top=0;

		marqueeheight=document.getElementById("marqueecontainer").offsetHeight;

		actualheight=cross_marquee.offsetHeight;

		if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit

			cross_marquee.style.height=marqueeheight+"px";

			cross_marquee.style.overflow="scroll";

			return

		}

		setTimeout('lefttime=setInterval("scrollmarquee()",35)', delayb4scroll);

	}



	//event listener

	if (window.addEventListener) {

		window.addEventListener("load", initializemarquee, false);

	}

	else if (window.attachEvent) {

		window.attachEvent("onload", initializemarquee);

	}

	else if (document.getElementById) {

		window.onload=initializemarquee;

	}



</script>

