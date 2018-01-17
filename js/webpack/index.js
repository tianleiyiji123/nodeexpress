import $ from 'jquery';
import '../../css/webpackconfig.css';
import '../../scss/webpack-sass-test.scss';

const $mypack = $("#my-webpack").find("li");

$mypack.filter(':odd').css('color','blue');
$mypack.filter(':even').css('color','red');