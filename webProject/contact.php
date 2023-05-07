<?php
$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$gender = $_POST["gender"];
$message = $_POST["message"];
$answer = $_POST["answer"];
$purpose = $_POST["purpose"];
echo ("Ad: $name");
echo ("\nSoyad: $surname");
echo ("\nE-mail: $email");
if($gender == "erkek")
{
    $gender = "erkek";
}
else
{
    $gender = "kadın";
}
echo ("\nCinsiyet: $gender");
echo ("\nKişisel verilerin kullanımını onayladı");
if($answer == "answerOk")
{
    $gender = ("\nGeri dönüş istiyor.");
}
else
{
    $gender = ("\nGeri dönüş istemiyor");
}
if ($purpose == "blank")
{
    echo ("\nSeçim yapılmadı");
}
else if ($purpose == "suggest")
{
    echo ("\nBu bir öneri başvurusudur");
}
else if ($purpose == "complaint")
{
    echo ("\nBu bir şikayet başvurusudur");
}
else if ($purpose == "thanks")
{
    echo ("\nBu bir teşekkür başvurusudur");
}
if ($message != "")
{
    echo ("Başvuru detayı: $message");
}
else
{
    echo ("Herhangi bir açıklama eklenmemiş");
}
?>



