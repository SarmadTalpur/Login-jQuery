$(document).ready(function(){
//Sign Up

    //email validation
    mailtest='';
    $("#em").blur(function(){
        mailtest=$(this).val();
        mailtest=mailtest.toLowerCase();
    });

    //username validation
    usertest='';
    $("#name").blur(function(){
        usertest=$(this).val();
    });
    //password validation
    passtest='';
    $('#pass').blur(function(){
        passtest=$(this).val();
        if(passtest.length>7){
            $('#failpass').html('Passowrd strength: Strong');
            $('#failpass').css({'background-color':'green','color':'white','opacity':'0.7'});
        }
        else{
            $('#failpass').html('Password Strength: Weak');
            $('#failpass').css({'background-color':'red','color':'white','opacity':'0.7'});
        }
    });
    //confirm password validation
    copatest='';
    $('#copa').blur(function(){
        copatest=$(this).val();
    });

    let test1=false;
    let test2=false;
    let test3=false;
    let test4=false;
    //Sign Up button validation
    $('#signup').click(function(){
        if((mailtest.includes('@gmail.com') || mailtest.includes('@outlook.com') || mailtest.includes('@yahoo.com')) && (mailtest.length>0)){
            $('#failemail').html("");
            $('#failemail').css("background-color:none");
            test1=true;
        }
        else if(mailtest.length==0){
            $('#failemail').html("Please enter email");
            $('#failemail').css({'background-color':'red', 'color':'white', 'opacity':'0.7', 'margin-top':'0'});
        }
        else{
            $('#failemail').html("Invalid Email");
            $('#failemail').css({'background-color':'red', 'color':'white', 'opacity':'0.7', 'margin-top':'0'});
        }
        if(usertest.length>2){
            $('#failname').html('');
            $('#failname').css("background-color","none");
            test2=true;
        }
        else if(usertest.length==0){
            $('#failname').html('Please enter username');
            $('#failname').css({"background-color":"red","color":"white","opacity":"0.7", 'margin-top':'0'});
        }
        else{
            $('#failname').html('Username should contain atleast three letters');
            $('#failname').css({"background-color":"red","color":"white","opacity":"0.7", 'margin-top':'0'});
        }
        if(passtest.length>7){
            $('#failpass').html('');
            $('#failpass').css('background-color','none');
            test3=true;
        }
        else if(passtest.length==0){
            $('#failpass').html('Please enter password');
            $('#failpass').css({'background-color':'red','color':'white','opacity':'0.7', 'margin-top':'0'});
        }
        else{
            $('#failpass').html('Paasowrd Strength must be strong');
            $('#failpass').css({'background-color':'red','color':'white','opacity':'0.7', 'margin-top':'0'});
        }
        if(copatest.length==0){
            $('#failcopa').html('Please enter confirm password');
            $('#failcopa').css({'background-color':'red','color':'white','opacity':'0.7', 'margin-top':'0'});
        }
        else if(copatest==passtest){
            $('#failcopa').html('');
            $('#failcopa').css('background-color','none');
            test4=true;
        }
        else{
            $('#failcopa').html('Paasowrd does not match');
            $('#failcopa').css({'background-color':'red','color':'white','opacity':'0.7', 'margin-top':'0'});
        }
        if(test1==true && test2==true && test3==true && test4==true) {
            $('#finalresult').html('You have successfully created your account!')
            $('#finalresult').css({"background-color":"blue","color":"white","opacity":"0.7"});
            $('#signres').html('');
            $('#signres').css('background-color','none');
        }

    });

    //Login

    //email validation
    signmail='';
    $('#signem').blur(function(){
        signmail=$(this).val();
    });
    //password validation
    signpass='';
    $('#signpassword').blur(function(){
        signpass=$(this).val();
    });

    let test5=false;
    let test6=true;

    //Signin button validation
    $('#login').click(function(){
        if(mailtest.length==0 || passtest.length==0){
            $('#signres').html('Please create an account first to Login successfully');
            $('#signres').css({'background-color':'red','color':'white','opacity':'0.7','margin-top':'0'});
        }
        else{
            $('#signres').html('');
            $('#signres').css('background-color','none');
            if(signmail==mailtest){
                $('#signmail').html('');
                $('#signmail').css('background-color','none');
                test5=true;
            }
            else if(signmail.length==0){
                $('#signmail').html('Please enter email');
                $('#signmail').css({'background-color':'red','color':'white','opacity':'0.7','margin-top':'0'});
            }
            else{
                $('#signmail').html('Invalid email, try again!');
                $('#signmail').css({'background-color':'red','color':'white','opacity':'0.7','margin-top':'0'});
            }
            if(signpass==passtest){
                $('#signpass').html('');
                $('#signpass').css('background-color','none');
                test6=true;
            }
            else if(signpass.length==0){
                $('#signpass').html('Please enter password');
                $('#signpass').css({'background-color':'red','color':'white','opacity':'0.7','margin-top':'0'});
            }
            else{
                $('#signpass').html('Invalid password, try again!');
                $('#signpass').css({'background-color':'red','color':'white','opacity':'0.7','margin-top':'0'});
            }
            if(test5==true && test6==true){
                window.location.href="login.html";
            }
        }
    });

});