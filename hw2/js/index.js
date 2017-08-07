$('#insert').on('click', function() {
    var data = {
            name: $('#InputProductName').val(),
            // +直接取數值非字串
            price: +$('#InputProductPrice').val(),
            count: +$('#InputProductCount').val(),
            image: $('#InputProductImage').val()
        }
        // "http://js2017-hw2.kchen.club/insert"
    $.post("https://huiyun58.github.io/hw2/insert.html", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

$('#query').on('click', function() {
    var page = 1;
    console.log(page);

    var fun = function(page) {
        $.get("http://js2017-hw2.kchen.club/query", function(response) {
            if (response) {
                if (response.result) {

                    for (var i = 32 * (page - 1); i < 32 * (page); i++) {
                        if (i < response.data.length - 5) {
                            var data2 = [
                                response.data[i]._id,
                                response.data[i].name,
                                response.data[i].price,
                                response.data[i].count,
                                response.data[i].image
                            ];

                            $div = $('<div>').attr('class', 'item').append('<img class="thumb" src="' + data2[4] + '">' + '<h3 class="title">' + data2[1] + '</h3>' + '<p class="price">NT$' + data2[2] + '</p>');
                            $col = $('<div>').attr('class', 'col-*').append($div);
                            $('#product-list').attr('class', 'row justify-content-around').append($col);
                        }
                        // alert("ID: " + data2[0] + "\nName: " + data2[1] + "\nPrice: " + data2[2] + "\nCount: " + data2[3] + "\nImg:" + data2[4]);
                    }

                } else {
                    $('#message').text('查詢失敗 (' + response.data + ')');
                    $('#dialog').modal('show');
                }


            } else {
                $('#message').text('查詢失敗');
                $('#dialog').modal('show');
            }
            // console.log(response);
        }, "json")
    }

    fun(page);



    $('#a1').on('click', function() {
        page = 1;
        console.log(page);
        $("#product-list").empty();
        fun(1);
    })
    $('#a2').on('click', function() {
        page = 2;
        console.log(page);
        $("#product-list").empty();
        fun(2);
    })
    $('#a3').on('click', function() {
        page = 3;
        console.log(page);
        $("#product-list").empty();
        fun(3);
    })
    $('#a4').on('click', function() {
        page = 4;
        console.log(page);
        $("#product-list").empty();
        fun(4);
    })
    $('#a5').on('click', function() {
        page = 5;
        console.log(page);
        $("#product-list").empty();
        fun(5);
    })


    $('#anxt').on('click', function() {
        if (page < 5) {
            page++;
        }
        console.log(page);
        $("#product-list").empty();
        fun(page);
    })
    $('#apre').on('click', function() {
        if (page > 6) {
            page--;
        }
        console.log(page);
        $("#product-list").empty();
        fun(page);
    })





})