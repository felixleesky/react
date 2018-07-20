

require(['bmob-min','jquery'],function($){
Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
console.log(111);
function myQuery(){
console.log(222);
  var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
      query.get("27426451a4", {
        success: function(object) {
          console.log(object.get("score"));
           console.log(object.get("createdAt"));
        // The object was retrieved successfully.
        //alert(object.get("score"));
        // document.getElementById("123").value=document.write(object.get("score"));;
      //$('#qqq').html(object.get("score"));
      document.getElementById("qqq").innerHTML = object.get("score"); 
      document.getElementById("userName").innerHTML = object.get("userName"); 
      document.getElementById("score").innerHTML = object.get("score"); 
      document.getElementById("address").innerHTML = object.get("address"); 
        return object;

        // 
      },
      error: function(object, error) {
      alert("query object fail");
    }
  });


  
  }
myQuery();
 });






