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
    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {
                alert("Name: " + response.data[0].name + "\nPrice: " + response.data[0].price);

                console.log(response.data[0].name);



            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        console.log(response);
    }, "json");
})