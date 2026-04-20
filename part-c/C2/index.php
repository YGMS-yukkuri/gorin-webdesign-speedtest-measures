<?php
$filename = "items.csv";
$csvData = [];
$page = 1;
if (isset($_GET["page"])) {
  $page = (int)$_GET["page"];
} else {
  $page = 1;
}


?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>C2</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <table>
    <?php

    $row = 0;
    if (($data = fopen($filename, "r")) !== false) {

      while (($csvData = fgetcsv($data)) !== false) {
        if ($row == 0) {
          echo ("<tr>");
          echo ("<td>");
          echo ($csvData[0]);
          echo ("</td>");
          echo ("<td>");
          echo ($csvData[1]);
          echo ("</td>");
          echo ("</tr>");
        }
        if ($row <= $page * 10 && $page * 10 - $row < 10) {
          echo ("<tr>");
          echo ("<td>");
          echo ($csvData[0]);
          echo ("</td>");
          echo ("<td>");
          echo ($csvData[1]);
          echo ("</td>");
          echo ("</tr>");
          $row++;
        } else {
          $row++;
        }
      };
    }

    ?>
  </table>
  <form method="post">
    <?php
    $next = $page + 1 < ($row / 10) ? $page + 1 : $page;
    $prev = $page - 1 > 0 ? $page - 1 : 1;

    ?>
    <a href="?page=<?php echo $prev ?>">前へ</a>
    <a href="?page=<?php echo $next ?>">次へ</a>
  </form>
  <?php echo ("ページ番号:" . $page); ?>

</body>

</html>