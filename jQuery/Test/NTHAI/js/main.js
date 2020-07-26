$().ready(function(){

	$("#register_form").validate({
        rules: {
            register_email: {
                required: true,
                email: true
            },
            confirm_email: {
                required: true,
                equalTo: "#register_email"
            }
            ,
            register_password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: "#register_password"
            }

        },
        messages: {
            register_email: {
                required: "Vui lòng nhập email!!",
                email: "Email của bạn không hợp lệ."
            },
            confirm_email: {
                required: "Vui lòng nhập email.",
                email: "Email của bạn không hợp lệ.",
                equalTo: "Vui lòng nhập lại đúng email phía trên."
            },
            register_password: {
                required: "Vui lòng nhập vào mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự.")
            },
            confirm_password: {
                required: "Vui lòng nhập lại mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự."),
                equalTo: "Vui lòng nhập lại đúng mật khẩu phía trên."
            }
        }
    });

	//validate login
    $("#login_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            email: {
                required: "Vui lòng nhập email!!",
                email: "Email của bạn không hợp lệ."
            },
            password: {
                required: "Vui lòng nhập vào mật khẩu.",
                minlength: jQuery.validator.format("mật khẩu của bạn phải ít nhất {0} ký tự.")
            }
        }
    });

    // login to register
    var x = $("#login_form");
	var y = $("#register_form");
    var z = $("#btn");

    $("#register_page").click(function(){
        x.css("left", "-400px");
        y.css("left", "50px");
        z.css("left", "0");
    });

    $("#login_page").click(function(){
        login_page();
    })

    function login_page(){
        x.css("left", "50px");
        y.css("left", "450px");
        z.css("left", "110px");
    }

    //4. create with min 5 accounts
    
    var usera = function(email, pass){
        this.email = email;
        this.pass = pass;
	}

    var arrUser = [new usera("admin@gmail.com", "admin12345"), 
                new usera("hai1@gmail.com", "hai12345"),
                new usera("hai2@gmail.com", "hai12345"), 
                new usera("hai3@gmail.com", "hai12345"),
                new usera("hai4@gmail.com", "hai12345")];

	arrUser.map((user,index)=>{
        var json = JSON.stringify(user);
        localStorage.setItem(user.email, json);
    });

    // display login/logout
    var show_email = localStorage.getItem("lg_email_ss");
	if(show_email == null) {
		$("#l_logout").hide();
		$("#l_login").show();
	} else {
		$("#l_login").hide();
		$("#l_logout").show();
	}
	// logout
	$("#l_logout").click(function(){
		localStorage.removeItem("lg_email_ss");
	});
    
    //register
    $("#register").click(function () {
        if ($("#register_form").valid()) {
            let email = $("#register_email").val(),
                pass = $("#register_password").val();
            let user = new usera(email, pass);
            let json = JSON.stringify(user);
            localStorage.setItem(email, json);
            login_page();
        }
    })

	// login
	$("#login").click(function(){
		if($("#login_form").valid()){
			let email = $("#email").val();
				pass = $("#password").val();

			let user_json = localStorage.getItem(email);
			if(user_json == null){
				alert("user or pass is wrong");
            }else{
				let user = JSON.parse(user_json);
                let pass_infor = user.pass;
                let user_infor = user.username;
				localStorage.setItem("lg_email_ss", email);
                
				if(pass == pass_infor){
                    $("#login_form").attr("action", "index.html");
                    $("#login_form").submit();
				}else{
					alert("user or pass is wrong");
				}
			}
		}
    });
    var show_email = localStorage.getItem("lg_email_ss");
    $("#show_user").text(show_email == null ? "" : "Hi : "+show_email );
    
    // Block FAQ

    var accordion_item = $(".accordion-item");

    accordion_item.click(function(){
        $(".accordion-item").not($(this)).each(function(){
            $(this).removeClass("active");
        });

        $(this).toggleClass("active");
    });

});