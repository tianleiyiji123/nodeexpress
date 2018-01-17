import $ from 'jquery';
import '../../css/webpackconfig.css';

const $mypack = $("#my-webpack").find("li");

$mypack.filter(':odd').css('color','blue');
$mypack.filter(':even').css('color','red');