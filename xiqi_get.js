auto.waitFor();
app.launchApp("菜鸟");

while (1) {
    let bubble = text("任务气泡").findOnce();
    if (bubble) {
        bubble.parent().parent().click();
    }
    else {
        toast("喜气值领取完毕");
        log("喜气值领取完毕");
        break;
    }
    sleep(1000);
}