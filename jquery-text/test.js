$(document).ready(function () {
    $.ajax({
        url: "https://www.nefuer.cc/pic",
        type: "get",
        dataType:"json",
        contentType : 'application/json',
        success:function (result) {
            if (result.code==0) {
                for(var i=0;i<result.data.length;i++){
                    if(i==0)
                    {
                        $(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>');
                        $(".carousel-inner").append('<div class="item active"><img src="'+result.data[i].url+'"></div>');
                    }
                    else{
                        $(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
                        $(".carousel-inner").append('<div class="item"><img src="'+result.data[i].url+'"></div>');
                    }

                }
                console.log(result);

            }
            if(result.code==1){
                console.log('1');
            }
            if(result.code==2){
                console.log('2');
            }
            console.log(result.data);
        },
        error:function(){
            alert('fail');
        },
        complete:function () {
            alert("yeyeye");
        }
    });
    // console.log('aaa');
});
