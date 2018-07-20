function Query() {
    console.log(1);
    var currentUser = Bmob.User.current();
    var UserData = Bmob.Object.extend("UserData");
    var query = new Bmob.Query(UserData);
    query.find({
        success: function (results) {
            var html = "";
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                //console.log(object);
                console.log(object.get('userName'));
                html += "<tr><td>" + (object.get('userName') == undefined ? "" : object.get('userName')) + "</td>" 
                +"<td>"+(object.get('sex') == undefined ? "" : object.get('sex')) + "</td>" 
                +"<td>"+(object.get('organization') == undefined ? "" : object.get('organization')) + "</td>" 
                +"<td>"+(object.get('duty') == undefined ? "" : object.get('duty')) + "</td>" 
                + "<td>"+ (object.get('address') == undefined ? "" : object.get('address')) + "</td></tr>";

                //(data[i].build==undefined?"":data[i].build)
                // $(".querys").append(html);
                // $(".querys").html(html);
            }
            $("table").append(html);

        },
        error: function (object, error) {
            alert("query object fail");
        }
    });
}
Query();

$(function () {
    $('#userdata').click(function () {
        // Bmob.User.logOut();
        $(location).attr('href', './userdata.html');
        console.log(11);
    });
    $('#logOut').click(function () {
        console.log(22);
        Bmob.User.logOut();
        $(location).attr('href', './login.html');
        console.log(22);
    });
});

