auto.waitFor();
app.launchApp("菜鸟");

while (1) {
    var skipTag = false;
    textStartsWith("¥").find().forEach(
        function (i) {
            if (skipTag) {
                skipTag = !skipTag;
                return;
            }
            skipTag = !skipTag;
            log(i.text());
            i.parent().click();
            sleep(4000 + random(0, 1000));
            if (text("请选择要使用的应用").exists()) { // MIUI 跳过打开淘宝
                click("取消");
            }
            id("title_bar_container_view_title").waitFor();
            back();
            sleep(2000);
            if (Math.random() > 0.5) {
                swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
            }
        })
}