function userdata() {
    var currentUser = Bmob.User.current();
    if (currentUser.id) {

        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        //userData.set("userId",currentUser.objectId);
        console.log(currentUser.id);
        query.equalTo("userId", currentUser.id);
        query.first({
            success: function (results) {
                console.log(results);
                console.log(results.attributes.address);
                document.getElementById("userName").innerHTML=results.attributes.userName;
                document.getElementById("address").innerHTML=results.attributes.address;
            },
            error: function (error) {
                alert("查询失败: " + error.code + " " + error.message);
            }

        });

    } else {
        alert("error:获取用户失败");
        $(location).attr('href', './login.html');
    }
}
userdata();

// var currentUser = Bmob.User.current();
// if (currentUser) {
//     // do stuff with the user
// } else {
//     // show the signup or login page
// }