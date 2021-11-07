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
            var thread = threads.start(function () {
                while (text("请选择要使用的应用").exists() == false) {
                    sleep(100);
                }
                sleep(1000);
                click("取消");
                sleep(1000);
                let skipAD = textStartsWith("跳过").findOnce();
                if (skipAD) {
                    skipAD.click();
                }
            });
            thread.waitFor();
            while (id("title_bar_container_view_title").exists() == false && thread.isAlive() == true) {
                sleep(100);
            }
            thread.interrupt();
            sleep(random(1000, 2000));
            back();
            // sleep(5000 + random(0, 1000));
            // if (text("请选择要使用的应用").exists()) { // MIUI 跳过打开淘宝
            //     click("取消");
            //     sleep(1000);
            //     let skipAD = textStartsWith("跳过").findOnce();
            //     if (skipAD) {
            //         skipAD.click();
            //     }
            // }
            // id("title_bar_container_view_title").waitFor();
            // back();
            sleep(2000);
            if (Math.random() > 0.5) {
                swipe(35 + random(10, 20), 1828 + random(10, 20), 35 + random(10, 20), 978 + random(10, 20), 1000 + random(100, 200));
            }
        })
}