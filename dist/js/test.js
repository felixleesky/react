$(function () {

        var user = new Bmob.User();
        user.set("username", "b");
        user.set("password", "123");
        //user.set("email", "email@example.com");
        // other fields can be set just like with Bmob.Object
        //user.set("phone", "415-392-0202");
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                var currentUser = Bmob.User.current();
                console.log(currentUser);
                
                console.log(currentUser.attributes.username);
              // alert("register success!");
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });

});
// function test(){
//     var currentUser = Bmob.User.current();
//     console.log(currentUser);
// }
    // $(function () {
    //     $('#register').click(function () {
    
    //         $(location).attr('href', './register.html');
    //         console.log(11);
    //     });
    // });
//  $(document).ready(function()
//  {
//      $('#register').click(function(e)
//      {
//          /*一系列根据自己的意图判断输入框是否已输入内容并决定是否往下执行*/
          
//          //获取表单的系列化数据。这会生成一个A=valueA&B=valueB这种形式的字符串。
//          var formData = $('#forms').serialize();
//          console.log(formData);
//         // $.post('目标地址',formData,成功/失败回调函数);
//          e.preventDefault();
//      });
      
//  });
//$(document).ready(function () {
  //  console.log($("#username").val());
    // $("#register").click(function () {
    //     window.location.href = './register.html';
    // });
    // $("#submit").click(function () {
    //     //window.location.href = './test.html';
    //     window.location = './test.html';
    // });
//});



// function Query() {
//     console.log(1);
//     var GameScore = Bmob.Object.extend("GameScore");
//     var query = new Bmob.Query(GameScore);
//     query.find({
//         success: function (results) {
//             var html = "";
//             for (var i = 0; i < results.length; i++) {
//                 var object = results[i];
//                 //console.log(object);
//                 console.log(object.get('userName'));
//                 html += "<tr><td>" + object.get('userName') + "</td>" +  "<td>" + object.get('score') + "</td></tr>";
//                 // $(".querys").append(html);
//                 // $(".querys").html(html);
//             }
//             $("table").append(html);
//         },
//         error: function (object, error) {
//             alert("query object fail");
//         }
//     });
// }
// Query();



// function test() {
//     console.log(1);
//     $(document).ready(function () {
//         $("#bu").click(function () {
//             //window.location.href("./query.html");
//             $(location).attr('href', './query.html');
//         });
//     });
// }
//$(document).ready(function(){
    //$("#bu").click(function(){
        //跳转
//window.location.href("./query.html");
//$(location).attr('href', './query.html');
//$(window).attr('location','./query.html');
//$(location).prop('href', 'http://www.jb51.net')

  // });
 //});