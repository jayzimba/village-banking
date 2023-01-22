<?php
    require_once("connection.php");
    
    $group = $_POST['group'];
    
    $Reg_Query = "
    UPDATE `group` SET total_members = total_members+1 WHERE `group`.`name` = '$group';";

    $Reg_Query_Result = mysqli_query($conn, $Reg_Query);

    if ($Reg_Query_Result) 
    {
        $Message = "Joined Successfully!";
    } else 
    {
        $Message = "Failed to join";
    }

    
    $response[] = array("Message" => $Message);
    
    echo json_encode($response);
?>