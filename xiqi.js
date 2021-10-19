auto.waitFor();
app.launchApp("菜鸟");

while (1) {
    textStartsWith("¥").find().forEach(
        function(i) {
            log(i.text());
            i.parent().click();
            id("title_bar_container_view_title").waitFor();
            sleep(1000);
            back();
            sleep(2000);
            swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
    })
}