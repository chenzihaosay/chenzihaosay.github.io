$(function() {
    var a_idx = 0,
        b_idx = 0;
    c_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("白云的无意停留","成就了天空的美丽永久","在人来人往的时间海洋","你的偶然出现","成就了我生命最美的乐曲","我有的不多","却愿意把最好的都留给你","么么哒","我爱你","你愿意我承包你的鱼塘吗？","一定要开开心心的","我一年后再跟你表白","先诅咒你到时候单身"),
                b = new Array("#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e", "#ff5163", "#efff51"),
                c = new Array("12", "14", "16", "18", "20", "22", "24", "26", "28", "30");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            b_idx = (b_idx + 1) % b.length;
            c_idx = (c_idx + 1) % c.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "font-size": c[c_idx] + "px",
                "color": b[b_idx]
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });
    var _hmt = _hmt || [];
})
