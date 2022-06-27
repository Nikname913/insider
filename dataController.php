<?php

class DataController {
  
  // ------------------------
  // ------------------------
  // {"host":"metoo-app-ru","goal":[{"tag":"SPAN","inner":"заказать звонок","attrs":[["class","button"]]},"testClick","12345678","click"]} - add goal
  // ------------------------
  // ------------------------
  // {"host":"metoo-app-ru","goalId":"goalId"} - delete goal
  // ------------------------
  // ------------------------
  
  var $key;
  var $file;
  var $data;
  
  function Init() {
    
    $this->key = $_GET['key'];
    $this->file = $_GET['file'];
    $this->data = $_GET['data'];
    
  }
  
  function Worker($filename, $data) {
    
    switch($this->key) {
      
      case 'ADD_GOAL':
        
        if ( file_exists('sitesData/' . $filename . '.json') ) {
          
          $file = 'sitesData/' . $filename . '.json';
          $fopen = fopen($file, 'r');
          $fileInner = fgets($fopen, 100000);
          
          $fileData = json_decode($fileInner);
          $fileDataArr = $fileData->data;
          $newFileData = array();
          
          foreach ( $fileDataArr as $line ) {
            
            array_push($newFileData, $line);
            
          }
          
          array_push($newFileData, json_decode($data));
          $newData = '{"data":' . json_encode($newFileData) . '}';
          
          fclose($fopen);
          file_put_contents($file, $newData);
          
        } else {
          
          echo 'file false';  
        
        }
        
        break;
        
      case 'READ_GOALS':  
        
        if ( file_exists('sitesData/' . $filename . '.json') ) {
          
          $file = 'sitesData/' . $filename . '.json';
          $fopen = fopen($file, 'r');
          $fileInner = fgets($fopen, 100000);
          
          $fileData = json_decode($fileInner);
          $fileDataArr = $fileData->data;
          
          echo $fileInner;
          fclose($fopen);
          
        } else {
          
          echo 'file false';  
        
        }
        
        break;
        
      case 'DELETE_GOAL':
        
        if ( file_exists('sitesData/' . $filename . '.json') ) {
          
          $file = 'sitesData/' . $filename . '.json';
          $fopen = fopen($file, 'r');
          $fileInner = fgets($fopen, 100000);
          
          $fileData = json_decode($fileInner);
          $fileDataArr = $fileData->data;
          $newFileData = array();
          
          foreach ( $fileDataArr as $line ) {
            
            if ( $line->goal[1] !== $data ) { 
              
              array_push($newFileData, $line);
            
            }
            
          }
          
          $newData = '{"data":' . json_encode($newFileData) . '}';
          echo $newData; 
          
          fclose($fopen);
          file_put_contents($file, $newData);
          
        } else {
          
          echo 'file false';  
        
        }
        
        break;  
        
      default:
        break;
      
    }
    
  }
  
}

$start = new DataController();
$start->Init();
$start->Worker($start->file, $start->data); 