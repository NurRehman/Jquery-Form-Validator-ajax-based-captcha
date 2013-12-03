<?php
session_start();

$string = '';
$captchaLength = 5; // How many character you want to generate
$charArray = array_merge(range(a, z), range(0, 9)); // a-z and 0-9 char array
for ($i = 0; $i < $captchaLength; $i++) {
	$string .= $charArray[rand(0, (count($charArray) - 1))];
    
}

$_SESSION['random_number'] = $string;

$dir = 'fonts/';

$image = imagecreatetruecolor(165, 50);

// random number 1 or 2
$fontFace 	= array("DS-DIGIT.TTF","Candy Cane.ttf", "Barbarello.ttf", "Malache Crunch.ttf" );
$font 		= array_rand($fontFace, 1);
// random number 1 or 2
//Img color, we can restrict it to a static numbers but I'm picking up the range.
$imgColor 	= array_rand(range(90,255), 3);

$color = imagecolorallocate($image, $imgColor[0], $imgColor[1], $imgColor[2]);// color

$white = imagecolorallocate($image, 255, 255, 255); // background color white
imagefilledrectangle($image,0,0,399,99,$white);

imagettftext ($image, 30, 0, 10, 40, $color, $dir.$fontFace[$font], $_SESSION['random_number']);

header("Content-type: image/jpeg");
imagejpeg($image, NULL, 90);

?>
