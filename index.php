<?php

header("Access-Control-Allow-Origin: *");

// INSERT INTO `insusers`(`ID`, `name`, `password`, `subs`) VALUES ('','username','qwerty','nothing')

function makeAPI() {
  
  $fork = $_GET['apiFork'];
  $user = $_GET['user'];
  $pass = $_GET['password'];
  
  $host = 'localhost';
  $login = 'c53399_metoo_app_ru';
  $password = 'SeGsuNorhorab86';
  $bd = 'c53399_metoo_app_ru';
  
  $answerNull = new stdClass();
  $answerNull->result = 'error';
  $answerNull->id = null;
  $answerNull->name = null;
  $answerNull->subs = null;
  $res = json_encode($answerNull);
  
  switch($fork) {
    
    case 'GET_USER':
      
      $mysqli = new mysqli(
        $host,
        $login,
        $password,
        $bd
      );
    
      $sql = "SELECT * FROM insusers";
      $result = $mysqli->query($sql);
      
      foreach ( $result as $row ) {
        
        if ( $user == $row["name"] && $pass == $row["password"]  ) {
          
          $answer = new stdClass();
          $answer->result = 'success';
          $answer->id = $row["ID"];
          $answer->name = $row["name"];
          $answer->subs = $row["subs"];
          
          $res = json_encode($answer);
          
        }
        
      }
      
      break;
      
    case 'SET_USER':
      
      $mysqli = new mysqli(
        $host,
        $login,
        $password,
        $bd
      );
      
      $subs = sha1('metoo-app-ru');
      
      $sql = "INSERT INTO `insusers`(`ID`, `name`, `password`, `subs`) VALUES ('','$user','$pass','$subs')";
      $mysqli->query($sql);
      
      $answer = new stdClass();
      $answer->result = 'success';
      $answer->id = '---';
      $answer->name = $user;
      $answer->subs = $subs;
      
      $res = json_encode($answer);
          
      break;
      
    case 'CHECK_USER':
      
      $mysqli = new mysqli(
        $host,
        $login,
        $password,
        $bd
      );
    
      $sql = "SELECT * FROM insusers";
      $result = $mysqli->query($sql);
      
      foreach ( $result as $row ) {
        
        if ( $user == $row["name"] ) {
          
          $answer = new stdClass();
          $answer->result = 'success';
          $answer->id = $row["ID"];
          $answer->name = $row["name"];
          $answer->subs = $row["subs"];
          
          $res = json_encode($answer);
          
        }
        
      }
      
      break;
      
    case 'REMOVE_USER':
      break;  
    
  }
  
  echo $res;
  return $res;
  
}

makeAPI();