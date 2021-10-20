auto.waitFor();
app.launchApp("菜鸟");

while (1) {
    text("任务气泡").findOnce().parent().parent().click();
    sleep(1000);
}