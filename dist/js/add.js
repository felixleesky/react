function add() {
  console.log(1);
  //创建类和实例
  $("button").click(function () {
    var GameScore = Bmob.Object.extend("GameScore");
    var gameScore = new GameScore();
    gameScore.set("userName", $("#userName").val());
    gameScore.set("score", $("#score").vali());
    gameScore.set("address", $("#address").val());
    //添加数据，第一个入口参数是null
    gameScore.save(null, {
      success: function (gameScore) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        alert('添加数据成功，返回的objectId是：' + gameScore.id);
      },
      error: function (gameScore, error) {
        // 添加失败
        alert('添加数据失败，返回错误信息：' + error.description);
      }
    });
  });
}
add();
function register() {
  var GameScore = Bmob.Object.extend("GameScore");
  $('#submit').click(function (e) {
      var gameScore = new GameScore();
      gameScore.set("userName", $("#userName").val());
      gameScore.set("address", $("#address").val());
      /*一系列根据自己的意图判断输入框是否已输入内容并决定是否往下执行*/
      var formData = $('form').serialize();
      var firstname = $("#userName").val();
      var lastname = $("#score").val();
      console.log(firstname);
      console.log(lastname);
      gameScore.save(null, {
          success: function (gameScore) {
              // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
              alert('添加数据成功，返回的objectId是：' + gameScore.id);
          },
          error: function (gameScore, error) {
              alert('添加数据失败，返回错误信息：' + error.description);
          }
      });
      e.preventDefault();
  });
}
register();







