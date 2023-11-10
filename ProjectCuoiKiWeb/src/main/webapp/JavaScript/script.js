tinymce.init({
	selector: 'textarea#default',
	width: 1100,
	height: 800,
	plugins: [
		'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'prewiew', 'anchor', 'pagebreak',
		'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
		'table', 'emoticons', 'template', 'codesample'
	],
	toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
		'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
		'forecolor backcolor emoticons',
	// enable title field in the Image dialog
	image_title: true,
	// enable automatic uploads of images represented by blob or data URIs
	automatic_uploads: true,
	// add custom filepicker only to Image dialog
	file_picker_types: 'image',
	file_picker_callback: function(cb, value, meta) {
		var input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');

		input.onchange = function() {
			var file = this.files[0];
			var reader = new FileReader();

			reader.onload = function() {
				var id = 'blobid' + (new Date()).getTime();
				var blobCache = tinymce.activeEditor.editorUpload.blobCache;
				var base64 = reader.result.split(',')[1];
				var blobInfo = blobCache.create(id, file, base64);
				blobCache.add(blobInfo);

				// call the callback and populate the Title field with the file name
				cb(blobInfo.blobUri(), { title: file.name });
			};
			reader.readAsDataURL(file);
		};

		input.click();
	},
	// add custom filepicker only to Image dialog
	file_picker_types: 'media',
	audio_template_callback: function(data) {
		return '<audio controls>' + '\n<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</audio>';
	},
	menu: {
		favs: { title: 'menu', items: 'code visualaid | searchreplace | emoticons' }
	},
	menubar: 'favs file edit view insert format tools table',
	content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
});
function CheckPass() {
	var repass = document.getElementById("repass").value;
	var newpass = document.getElementById("newpass").value;
	var password = document.getElementById("password").value;
	if (repass === "" || newpass === "" || password === "") {
		alert("Bạn Muốn Đổi Mật Khẩu Vui Lòng Nhập Theo Hướng Dẫn");
		return false;
	} else if (newpass !== repass) {
		alert("Bạn Nhập Xác Nhận Mật Khẩu Chưa Đúng !");
		return false;
	}
	else {
		return true;
	}
}


function handleFocus() {
	const page = document.querySelector('.page');
	const sidebarHome = document.querySelector('.sidebar_home');
	const pageStudy = document.querySelector('.page_study');
	const sidebarStudy = document.querySelector('.sidebar_study');
	page.style.display = 'none';
	sidebarHome.style.display = 'none';
	pageStudy.style.display = 'block';
	sidebarStudy.style.display = 'block';
}
function handleCheckboxChange(checkbox) {
	var tkhocvienCheckbox = document.getElementById("tkhocvien");
	var tkgiaovienCheckbox = document.getElementById("tkgiaovien");
	if (checkbox.id === "tkgiaovien" && checkbox.checked) {
		tkhocvienCheckbox.checked = false;
	} else if (checkbox.id === "tkhocvien" && checkbox.checked) {
		tkgiaovienCheckbox.checked = false;
	}
}
function validateForm() {
	var tkhocvienCheckbox = document.getElementById("tkhocvien");
	var tkgiaovienCheckbox = document.getElementById("tkgiaovien");

	if (!tkhocvienCheckbox.checked && !tkgiaovienCheckbox.checked) {
		alert("Bạn phải chọn ít nhất một tùy chọn (Học viên hoặc Giáo viên) .");
		return false;
	}
	return true;
}


function testConfirmDialog() {
	var result = confirm("Bạn chắc chắc có muốn đăng xuất không");
	if (result == true) {
		window.location.href = "dang-xuat";
	}
	else {
		return false;
	}
}
function XacNhanXoaKH(makhoahoc) {
	var result = confirm("Bạn chắc chắc có muốn xoá khoá học này không");
	if (result == true) {
		window.location.href = "Delete-Course?makhoahoc=" + makhoahoc;
	}
	else {
		return false;
	}
}
function handleBlur() {
	const page = document.querySelector('.page');
	const sidebarHome = document.querySelector('.sidebar_home');
	const pageStudy = document.querySelector('.page_study');
	const sidebarStudy = document.querySelector('.sidebar_study');
	page.style.display = 'block';
	sidebarHome.style.display = 'block';
	pageStudy.style.display = 'none';
	sidebarStudy.style.display = 'none';
}
function enableField() {
	const username = document.getElementById("username");
	const quocgia = document.getElementById("quocgia");
	const sdt = document.getElementById("sdt");
	const vungmien = document.getElementById("vungmien");
	const trinhdo = document.getElementById("trinhdo");
	const diachi = document.getElementById("diachi");
	const save = document.getElementById("save");
	const email = document.getElementById("email");
	const chuyennganh = document.getElementById("chuyennganh");
	username.removeAttribute("disabled");
	quocgia.removeAttribute("disabled");
	sdt.removeAttribute("disabled");
	vungmien.removeAttribute("disabled");
	trinhdo.removeAttribute("disabled");
	diachi.removeAttribute("disabled");
	email.removeAttribute("disabled");
	save.disabled = false;
	chuyennganh.removeAttribute("disabled");
}
function myCourses() {
	const page = document.querySelector('.page_content');
	const homecourse = document.querySelector('.home_course');
	page.style.gridTemplateColumns = '77% 22.7%';
	homecourse.style.display = 'block';
}

function homePage() {
	const page = document.querySelector('.page_content');
	const homecourse = document.querySelector('.home_course');
	page.style.gridTemplateColumns = 'auto';
	homecourse.style.display = 'none';
}
function ReloadAlert(thongBao) {
	if (thongBao !== null && thongBao !== "") {
		alert(thongBao);
	}
}
function checkKhoaHoc() {
	var matacgia = document.getElementById("matacgia").value;
	var giatien = document.getElementById("giatien").value;
	var danhgia = document.getElementById("danhgia").value;
	var thoiluong = document.getElementById("thoiluong").value;

	var parsedMatacgia = parseFloat(matacgia);
	if (isNaN(parsedMatacgia)) {
		alert("Mã tác giả không hợp lệ. Vui lòng nhập một số hợp lệ.");
		return false;
	}
	var parsedGiatien = parseFloat(giatien);
	if (isNaN(parsedGiatien)) {
		alert("Giá tiền không hợp lệ. Vui lòng nhập một số hợp lệ.");
		return false; 
	}

	var parsedDanhgia = parseFloat(danhgia);
	if (isNaN(parsedDanhgia)) {
		alert("Đánh giá không hợp lệ. Vui lòng nhập một số hợp lệ.");
		return false; 
	}

	// Kiểm tra kiểu dữ liệu của thoiluong
	var parsedThoiluong = parseFloat(thoiluong);
	if (isNaN(parsedThoiluong)) {
		alert("Thời lượng không hợp lệ. Vui lòng nhập một số hợp lệ.");
		return false; 
	}
	return true;

}
function goToNewPage() {
	window.location.href = "./signin.html";
}

function scrollToElement(elementId) {
	window.location.href = "profile"; // Thay đổi URL tới trang bạn muốn chuyển đến
	localStorage.setItem('scrollToElement', elementId);
}

function confirmPay(diff) {
	if (diff < 0) {
		var money = alert("Tiền trong thẻ không đủ thanh toán các khóa học!");
		return "paycartinfo";
	} else {
		var result = confirm("Bạn sẽ thanh toán các khóa học này chứ ?");
		if (result == true) {
			window.location.href = "paycourses";
		}
		else {
			return "redirect:/homepage";
		}
	}
}
function createLessonFaied(warning) {
	if (warning != "" && warning != null) {
		alert(warning);
	}
}
