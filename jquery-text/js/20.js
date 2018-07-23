jQuery.fn.extend({
    slider:function (option) {
        var defaultoption = {
            timer: 1000,
        }

        var newOption = $.extend({},defaultoption,option);

        var content = $("<div class='slider'></div>>");
        var sliderList = '<div class="slider-panner sp1" style="background-color: rgb(232, 232, 232)">' +
            '        <div>' +
            '            <img src="https://img.alicdn.com/simba/img/TB1fN3WA7CWBuNjy0FaSutUlXXa.jpg" alt="">' +
            '        </div>' +
            '    </div>' +
            '    <div class="slider-panner sp2" style="background-color: rgb(0,0,0)">' +
            '        <div>' +
            '            <img src="https://img.alicdn.com/tps/i4/TB1o_JiAVOWBuNjy0FiSutFxVXa.jpg" alt="">' +
            '        </div>' +
            '    </div>' +
            '    <div class="slider-panner sp3" style="background-color: rgb(232,232,232)">' +
            '        <div>' +
            '            <img src="https://img.alicdn.com/simba/img/TB114X1gBjTBKNjSZFuSuv0HFXa.jpg" alt="">' +
            '        </div>' +
            '    </div>'
        var sliderBtn = "<div>" +
            "    <ul>" +
            "        <li class=\"num active\"></li>" +
            "        <li class=\"num\"></li>" +
            "        <li class=\"num\"></li>" +
            "    </ul>\n" +
            "\n" +
            "</div>"
        content.html(sliderList+sliderBtn);
        this.append(content);

    }
})