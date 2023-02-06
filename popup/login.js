function login(username, password) {
	var url = "http://idnboardingschool.net/login?username=" + username + "&password=" + password;
	// fetch("GET", "http://192.168.20.1/logout");
	// fetch("GET", url);
	// console.log(xmlHttp.responseText);
	var logout = window.open("http://idnboardingschool.net/logout", "_blank", "width=500,height=400");
	var login = window.open(url, "_blank", "width=500,height=400");
	setTimeout(() => {
		logout.close();
	}, "1000");

	setTimeout(() => {
		login.close();
	}, "3000");
}

document.getElementById("kls9b").onclick = function () {
	login("kls9b", "9bb");
};
document.getElementById("kls9c").onclick = function () {
	login("kls9c", "9cc");
};
document.getElementById("kls9").onclick = function () {
	login("kls9", "99");
};
document.getElementById("9smp").onclick = function () {
	login("9smp", "smp9");
};
document.getElementById("kelas8").onclick = function () {
	login("kelas8", "VIII");
};
document.getElementById("kelas7").onclick = function () {
	login("kelas7", "7kelas");
};