
function validate() {

    var valid = true;
    valid = checkType($("#in_type"));
    valid = valid && checkArea($("#in_area"));
    valid = valid && valid && checkName($("#name"));
    valid = valid && valid && valid && checkNumber($("#number"));
    valid = valid && valid && valid && valid && checkEmail($("#email"));

    $("#submit_button").attr("disabled",true);
    if(valid) {
        $("#submit_button").attr("disabled",false);
    }
}


$(document).ready(function() { 
	$('#submit_button').click(function(){ 
		alert('문의가 전송되었습니다');
	});
});





function press(f){
    if(f.keyCode == 13){
        frm1.submit();
    }
}





function checkType(obj) {
    var nowSelctType = document.getElementById("in_type");
    var rowType = document.getElementsByClassName("row type");
    if($("#in_type option:selected").text() == "문의유형을 선택해주세요") {
        $(nowSelctType).css("color","#FF0000");
        $(rowType).css("border-bottom","#FF0000 1px solid");
        return false;
    } else {
        $(nowSelctType).css("color","#FFF");
        $(rowType).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    return true;
}

function checkArea(obj) {
    var nowSelctArea = document.getElementById("in_area");
    var rowArea = document.getElementsByClassName("row area");
    if($("#in_area option:selected").text() == "지역을 선택해주세요") {
        $(nowSelctArea).css("color","#FF0000");
        $(rowArea).css("border-bottom","#FF0000 1px solid");
        return false;
    } else {
        $(nowSelctArea).css("color","#FFF");
        $(rowArea).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    return true;
}


function checkName(obj) {
    var rowName = document.getElementsByClassName("row name");
    if($(obj).val() == "") {
        $(rowName).css("border-bottom","#FF0000 1px solid");
        $(obj).attr("placeholder", " !! 제대로 입력했는지 확인해주세요 !!");
        return false;
    } else {
        $(rowName).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    return true;
}


function checkNumber(obj) {
    var rowNumber = document.getElementsByClassName("row number");
    if($(obj).val() == "") {
        $(rowNumber).css("border-bottom","#FF0000 1px solid");
        $(obj).attr("placeholder", " !! 숫자만 입력해주세요 !!");
        return false;
    } else {
        $(rowNumber).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    return true;
}

function checkEmpty(obj) {
    if($(obj).val() == "") {
        return false;
    }

    return true;
}


function checkEmail(obj) {
    var result = true;

    var rowEmail = document.getElementsByClassName("row email");


    result = checkEmpty(obj);

    if(!result) {
        $(rowEmail).css("border-bottom","#FF0000 1px solid");
        $(obj).attr("placeholder", " !! Email주소 형식으로 입력해주세요 !!");
        return false;
    } else {
        $(rowEmail).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    result = email_regex.test($(obj).val());

    if(!result) {
        $(rowEmail).css("border-bottom","#FF0000 1px solid");
        $(obj).attr("placeholder", " !! Email주소 형식으로 입력해주세요 !!");
        return false;
    } else {
        $(rowEmail).css("border-bottom","rgba(255,255,255,0.2) 1px solid");
    }

    return result;
}