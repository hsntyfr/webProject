<?php
$email = $_POST["email"];
$password = $_POST["password"];
if (!empty($_POST["email"])) //There is checked if e-mail is there
{
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) //There is checked e-mail is regular
    {
        if (!empty($_POST["password"])) //There is checked if password is there
        {
            $array=explode("@",$email);
            $username = $array[0];
            //her şey tamam atamalar yapıldı
            if ($username == $password) //There is checked if password is equal username
            {
                echo "Hoşgeldiniz ".$username;
            }
            else
            {
                echo "Kullanıcı adı veya şifre hatalı";
                header("refresh:3; login.html");
            }
        }
        else
        {
            echo "Şifre alanı boş geçilemez";
            header("refresh:3; login.html");
        }
    }
    else
    {
        echo "E-mail format dışı";
        header("refresh:3; login.html");
    }
}
else
{
    echo "E-mail alanı boş geçilemez";
    header("refresh:3; login.html");
}
?>