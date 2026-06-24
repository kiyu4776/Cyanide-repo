log("あ");

var backdropCls = r_class("SBHomeScreenBackdropView");
var windowCls = r_class("SBHomeScreenWindow");
var app = r_msg2(r_class("UIApplication"), "sharedApplication");
var windows = r_msg2(app, "windows");
var winCount = r_msg2(windows, "count");

var homeWindow = 0;
for (var w = 0; w < winCount; w++) {
    var win = r_msg2(windows, "objectAtIndex:", w);
    if (r_msg2(win, "isKindOfClass:", windowCls)) {
        homeWindow = win;
        break;
    }
}

var homeView = r_msg2(r_msg2(homeWindow, "subviews"), "objectAtIndex:", 0);
var backdrops = r_msg2(homeView, "subviews");
var bCount = r_msg2(backdrops, "count");

for (var j = 0; j < bCount; j++) {
    var candidate = r_msg2(backdrops, "objectAtIndex:", j);
    if (r_msg2(candidate, "isKindOfClass:", backdropCls)) {
        r_msg2_main(candidate, "setAlpha:", 0.0);
        log("完了");
    }
}
