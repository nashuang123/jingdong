<?php
    $user=$_POST["user"];
    $pwd=$_POST["pwd"];
    $arr=array("admin","aa","bb");
    $arr2=array("admin"=>"123","aa"=>"456","bb"=>"666");
    if(in_array($user,$arr)){
        if($arr2[$user]==$pwd){
            echo '{"code":2}';
        }else{
            echo '{"code":1}';
        }
    }else{
        echo'{"code":0}';
    }

?>