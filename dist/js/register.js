$(function () {
    $('#register').click(function () {
        var user = new Bmob.User();
        user.set("username", $("#username").val());
        user.set("password", $("#password").val());
        console.log($("#username").val());
        //user.set("email", "email@example.com");
        // other fields can be set just like with Bmob.Object
        //user.set("phone", "415-392-0202");
        user.signUp(null, {
            success: function (user) {
                success();
                // Hooray! Let them use the app now.
              // alert("register success!");
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
    });
});
function success(){
    var currentUser = Bmob.User.current();
    console.log(currentUser.objectId);
    var UserData = Bmob.Object.extend("UserData");
    var userData = new UserData();
    userData.set("userId",currentUser.id);
    userData.set("loginUserName",currentUser.attributes.username);
    userData.save(null, {
        success: function(userData) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          //alert('添加数据成功，返回的objectId是：' + userData.id);
          $(location).attr('href', './login.html');
          return 1;
        },
        error: function(userData, error) {
          // 添加失败
         alert('添加数据失败，返回错误信息：' + error.description);
        }
      });
}