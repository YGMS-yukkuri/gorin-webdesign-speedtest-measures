<?php
if (!file_exists("events.json")) {
    file_put_contents("events.json", null);
};
$file = file_get_contents("events.json");
$json = json_decode($file, true);

if($_SERVER["REQUEST_METHOD"] === "POST") {
    if(isset($_POST["id"])) {
        $json[$_POST["id"]]["checked"] = isset($_POST["check"]);

        file_put_contents("events.json",json_encode($json));
    } else {
        if(is_array($json)) {
            $newkey = array_key_last($json) + 1;
        } else {
            $newkey = 0;
        }
        $new = [
            "id" => $newkey,
            "title" => $_POST["title"],
            "body" => $_POST["body"],
            "checked" => false
        ];
        $json[] = $new;
        file_put_contents("events.json",json_encode($json, JSON_UNESCAPED_UNICODE));
        header("Location:" . $_SERVER["PHP_SELF"]);
        exit;
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post">
        <label for="">title</label>
        <input type="text" name="title" id="">
        <label for="">body</label>
        <input type="text" name="body" id="">
        <button type="submit">Register</button>
    </form>
    <?php if (is_array($json)): ?>
        <?php foreach (array_reverse($json,true) as $key => $value): ?>
            <form action="" method="post">
                <div>
                    <h3>title:<?= htmlspecialchars($value["title"]) ?></h3>
                    <p><?= htmlspecialchars($value["body"]) ?></p>
                    <input type="hidden" name="id" value=<?= $key ?>>
                    <label for="">完了:</label>
                    <input type="checkbox" name="check" id="" <?php if($value["checked"]){echo("checked");}; ?>>
                </div>
                <button type="submit">状態を更新</button>
            </form>
        <?php endforeach ?>
    <?php endif ?>
</body>

</html>