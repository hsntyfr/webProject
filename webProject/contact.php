<?php
$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$gender = $_POST["gender"];
$message = $_POST["message"];
$answer = $_POST["answer"];
$purpose = $_POST["purpose"];
echo nl2br("Ad: $name");
echo nl2br("\nSoyad: $surname");
echo nl2br("\nE-mail: $email");
if($gender == "erkek")
{
    $gender = "erkek";
}
else
{
    $gender = "kadın";
}
echo nl2br("\nCinsiyet: $gender");
echo nl2br("\nKişisel verilerin kullanımını onayladı");
if($answer == "answerOk")
{
    echo nl2br("\nGeri dönüş istiyor.");
}
else
{
    echo nl2br("\nGeri dönüş istemiyor.");
}
if ($purpose == "blank")
{
    echo nl2br("\nSeçim yapılmadı");
}
else if ($purpose == "suggest")
{
    echo nl2br("\nBu bir öneri başvurusudur");
}
else if ($purpose == "complaint")
{
    echo nl2br("\nBu bir şikayet başvurusudur");
}
else if ($purpose == "thanks")
{
    echo nl2br("\nBu bir teşekkür başvurusudur");
}
if ($message != "")
{
    echo nl2br("\nBaşvuru detayı: $message");
}
else
{
    echo nl2br("\nHerhangi bir açıklama eklenmemiş");
}
header("refresh:10; contact.html");
?>



