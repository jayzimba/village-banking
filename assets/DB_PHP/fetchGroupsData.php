<?php
    $CN =  mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "village_banking");


    $SQ = "SELECT * FROM `group`";
    $Table = mysqli_query($CN, $SQ);
    $json;

    if(mysqli_num_rows($Table) > 0){
            while($Row = mysqli_fetch_assoc($Table))
            {
                $json[] = $Row; 
            }
           mysqli_fetch_all($Table, MYSQLI_ASSOC);

           echo json_encode($json);
    }
    else{
        echo "no groups found";
    }
?>