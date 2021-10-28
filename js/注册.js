
	/*验证密码是否一致*/
function validate() {
	var pwd1 = document.getElementById("password").value;
	var pwd2 = document.getElementById("confirmPassword").value;

	<!-- 对比两次输入的密码 -->
	if(pwd1 == pwd2)
	{
		document.getElementById("tishi").innerHTML="<font color='green'>两次密码相同</font>";
		document.getElementById("button").disabled = false;
	}
	else {
		document.getElementById("tishi").innerHTML="<font color='red'>两次密码不相同</font>";
		document.getElementById("button").disabled = true;
	}
}

		