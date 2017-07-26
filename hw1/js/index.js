// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
var I= function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ixy = 1 / 12 * m * (3 * r * r + h * h)
    Iz = 1 / 2 * m * r * r}


$('button1').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ixy = 1 / 12 * m * (3 * r * r + h * h)
    $('#result').val(Ixy)
})
$('button2').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ixy = 1 / 12 * m * (3 * r * r + h * h)
    $('#result').val(Ixy)
})
$('button3').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Iz = 1 / 2 * m * r * r
    $('#result').val(Iz)
})