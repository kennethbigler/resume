// JavaScript Document
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-54229318-1', 'auto');
ga('send', 'pageview');

function showContent()
{
	document.getElementById('content').style.visibility='visible';
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('content4').style.visibility='hidden';
	document.getElementById('content5').style.visibility='hidden';
	document.getElementById('n0').className='navpill current';
	document.getElementById('n1').className='navpill';
	document.getElementById('n2').className='navpill';
	document.getElementById('n3').className='navpill';
	document.getElementById('n4').className='navpill';
	document.getElementById('n5').className='navpill';
}
function showContentOne()
{
	document.getElementById('content').style.visibility='hidden';
	document.getElementById('content1').style.visibility='visible';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('content4').style.visibility='hidden';
	document.getElementById('content5').style.visibility='hidden';
	document.getElementById('n0').className='navpill';
	document.getElementById('n1').className='navpill current';
	document.getElementById('n2').className='navpill';
	document.getElementById('n3').className='navpill';
	document.getElementById('n4').className='navpill';
	document.getElementById('n5').className='navpill';
}
function showContentTwo()
{
	document.getElementById('content').style.visibility='hidden';
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='visible';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('content4').style.visibility='hidden';
	document.getElementById('content5').style.visibility='hidden';
	document.getElementById('n0').className='navpill';
	document.getElementById('n1').className='navpill';
	document.getElementById('n2').className='navpill current';
	document.getElementById('n3').className='navpill';
	document.getElementById('n4').className='navpill';
	document.getElementById('n5').className='navpill';
}
function showContentThree()
{
	document.getElementById('content').style.visibility='hidden';
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='visible';
	document.getElementById('content4').style.visibility='hidden';
	document.getElementById('content5').style.visibility='hidden';
	document.getElementById('n0').className='navpill';
	document.getElementById('n1').className='navpill';
	document.getElementById('n2').className='navpill';
	document.getElementById('n3').className='navpill current';
	document.getElementById('n4').className='navpill';
	document.getElementById('n5').className='navpill';
}
function showContentFour()
{
	document.getElementById('content').style.visibility='hidden';
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('content4').style.visibility='visible';
	document.getElementById('content5').style.visibility='hidden';
	document.getElementById('n0').className='navpill';
	document.getElementById('n1').className='navpill';
	document.getElementById('n2').className='navpill';
	document.getElementById('n3').className='navpill';
	document.getElementById('n4').className='navpill current';
	document.getElementById('n5').className='navpill';
}
function showContentFive()
{
	document.getElementById('content').style.visibility='hidden';
	document.getElementById('content1').style.visibility='hidden';
	document.getElementById('content2').style.visibility='hidden';
	document.getElementById('content3').style.visibility='hidden';
	document.getElementById('content4').style.visibility='hidden';
	document.getElementById('content5').style.visibility='visible';
	document.getElementById('n0').className='navpill';
	document.getElementById('n1').className='navpill';
	document.getElementById('n2').className='navpill';
	document.getElementById('n3').className='navpill';
	document.getElementById('n4').className='navpill';
	document.getElementById('n5').className='navpill current';
}