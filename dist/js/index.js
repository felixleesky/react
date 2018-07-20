function index(){
    var currentUser = Bmob.User.current();
    if(currentUser != null){
        $(location).attr('href', './query.html');
    }else{
        $(location).attr('href', './login.html');
    }
}
index();