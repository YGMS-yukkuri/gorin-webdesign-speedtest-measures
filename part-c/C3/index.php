<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $uploadDir = "uploads/";

  if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
  };


  $file = $_FILES["file"];
  if ($file["error"] !== UPLOAD_ERR_OK) {
    die("アップロードエラー" . $file["error"]);
  };

  if ($file["size"] > 2 * 1024 * 1024) {
    die("ファイルサイズが大きすぎます");
  };

  $AllowExt = ["jpeg", "png", "gif"];
  $fileExt = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

  if (!in_array($fileExt, $AllowExt)) {
    die("ファイル形式が不正です");
  };

  $newFilename = uniqid() . "." . $fileExt;
  $location = $uploadDir . $newFilename;

  if (!move_uploaded_file($file["tmp_name"], $location)) {
    die("保存失敗");
  };
  echo "ファイルがアップロードされました。<br>";
  echo "ファイル名:" . htmlspecialchars($newFilename) . "<br>";
  echo "ファイルサイズ:" . $file["size"] . "byte<br>";
  echo "MIMEタイプ:" . $file["type"] . "<br>";
};



?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C3</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <form method="POST" enctype="multipart/form-data">
    <label for="file">ファイルを選択:</label>
    <input type="file" name="file" id="file">
    <button type="submit">送信</button>
  </form>
</body>

</html>