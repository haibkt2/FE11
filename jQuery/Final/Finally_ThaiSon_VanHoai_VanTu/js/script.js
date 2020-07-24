function addZoneList() {
    var getZoneList = $("#zonelist").val();
    for (let i=0; i<getZoneList.length;i++){
        $("#whilelisted").append("<option>"+getZoneList[i]+"</option>");
    }
};
function removeZoneList() {
    var getWhilelisted = $("#whilelisted option:selected");
    getWhilelisted.remove();
};
function addZoneListEdit() {
    var getZoneList = $("#zonelistEdit").val();
    for (let i=0; i<getZoneList.length;i++){
        $("#whilelistedEdit").append("<option>"+getZoneList[i]+"</option>");
    }
};
function removeZoneListEdit() {
    var getWhilelisted = $("#whilelistedEdit option:selected");
    getWhilelisted.remove();
};

function save(){
    var coms = {
        companys:$("#txtCompany").val(),
        max: $("#txtMax").val(),
        status: $("#chkStatus").val(),
        color: $("#colorCode").val(),
        whitelist:$("#whilelisted").val()
    }
    var old = localStorage.getItem("cpn");
    if (old =="" ||old==null){
        localStorage.setItem("cpn",JSON.stringify(coms)); 
    }
    else{
        localStorage.setItem("cpn",old +"~"+ JSON.stringify(coms)); 
    }
    location.href="index.html";
}
function getCompany(){
    var loads = localStorage.getItem("cpn");
    var arr = (loads=="" ||loads==null)?[]:loads.split("~");
    for (var i in arr){
        var obj = JSON.parse(arr[i]);
        $("#result").append(
            "<tr>"+
                "<td>"+"<input type='checkbox' class='check'>"+"</td>"+
                "<td>"+obj.companys+"</td>"+
                "<td>"+"<div class='colorDis'" +"style='background-color:"+obj.color+"'"+">"+"</div>"+"</td>"+
                "<td>"+obj.max+"</td>"+
                "<td>"+
                    obj.whitelist.join("</br>")+
                "</td>"+
                "<td>"+obj.status+"</td>"+
                "<td>"+"<a href='edit.html' class='mr-2 btnEdit'><i class='fas fa-edit'></i></a><a href='' class='btnrem'><i class='fas fa-trash-alt'></i></a>"+
            "</tr>"
        );
    };
};
function checkAll(source) {
    var getCheck = $(".check");
    for (let i = 0; i < getCheck.length; i++) {
        getCheck[i].checked= source.checked;
    }
};
function editCompany(){
    var loads = localStorage.getItem("cpnTerm");
    var arr = JSON.parse(loads);
    if(arr!=null){
         //var arrNew=JSON.parse(arr[myIndex]);
         $("#txtCompanyEdit").val(arr.companys);
         $("#txtMaxEdit").val(arr.max);
         $("#chkStatusEdit").val(arr.status);
         $("#colorCodeEdit").val(arr.color);
         var whiteList = arr.whitelist;
         for (let i=0; i<whiteList.length;i++){
             $("#whilelistedEdit").append("<option>"+whiteList[i]+"</option>");
         }
    }
   
};
function get(check){
    const myIndex = $(check).parent().parent().prevAll().length;
    var loads = localStorage.getItem("cpn");
    var arr = (loads==null)?[]:loads.split("~");
    localStorage.setItem("cpnTerm",arr[myIndex]);
    localStorage.setItem("index",myIndex);
};
function removeEL(check){
    var myIndex = $(check).parent().parent().prevAll().length;
    var loads = localStorage.getItem("cpn");
    var arr = (loads==null)?[]:loads.split("~");
    arr.splice(myIndex, 1);
    var newArray=arr.join("~");
    localStorage.setItem("cpn",newArray);
};

function saveEditCompany(){
    var i = localStorage.getItem("index");
    var coms = {
        companys:$("#txtCompanyEdit").val(),
        max: $("#txtMaxEdit").val(),
        status: $("#chkStatusEdit").val(),
        color: $("#colorCodeEdit").val(),
        whitelist:$("#whilelistedEdit").val()
    }
    var loads = localStorage.getItem("cpn");
    var arr = (loads==null)?[]:loads.split("~");
    arr[i]=JSON.stringify(coms);
    var newArray=arr.join("~");
    localStorage.setItem("cpn",newArray);
    location.href="index.html";
};
function deleteEL(){
    var getCheckItem = $(".check:checked");
    for (let k=0;k<getCheckItem.length;k++){
        if(getCheckItem[k].checked){
            var getCheck = $(".check:checked");
            var term="";
            for (var i =0;i<getCheck.length;i++){
                var getIndex=$(getCheck[i]).parent().parent().prevAll().length;
                term+=((term=="")?"":"~")+getIndex;
            }
            localStorage.setItem("delete",term);
            var loadDell = localStorage.getItem("delete");
            var arr = (loadDell==null)?[]:loadDell.split("~");
            var loads = localStorage.getItem("cpn");
            var arr2 = (loads==null)?[]:loads.split("~");
            for(var j=0; j<arr.length;j++){
                var a = arr[j];
                arr2.splice(a, 1);
            }
            var newArray=arr2.join("~");
            localStorage.setItem("cpn",newArray);
        } 
    }
}



$(document).ready(function () {
    $("#formRegister").validate({
        rules:{
            txtCompany: {
                required: true,
            },
            txtMax:{
                required:true,
                number: true
            },
            whilelisted:{
                required: true,
            }
        },
        messages: {
            txtCompany: "Please enter a value",
            txtMax:{
                required:"Please enter a value",
                number:"Please enter a number"
            },
            whilelisted: "Please Select one or more value"
            
        },
        submitHandler: function(){
            save();
        }
    });
    $("#formEdit").validate({
        rules:{
            txtCompanyEdit: {
                required: true,
            },
            txtMaxEdit:{
                required:true,
                number: true
            },
            whilelistedEdit:{
                required: true,
            }
        },
        messages: {
            txtCompanyEdit: "Please enter a value",
            txtMaxEdit:{
                required:"Please enter a value",
                number:"Please enter a number"
            },
            whilelistedEdit: "Please Select one or more value"
            
        },
        submitHandler: function(){
            saveEditCompany();
        }
    });
    editCompany()
    getCompany();
    $("#checkAll").change(function() {
        checkAll(this);
    });
    $("#btnNext").click(function () {
        addZoneList();
    });
    $("#btnPre").click(function () {
        removeZoneList();
    });
    $("#btnNextEdit").click(function () {
        addZoneListEdit();
    });
    $("#btnPreEdit").click(function () {
        removeZoneListEdit();
    });

    $("#btnAdd").click(function () {
        location.href="register.html";
    });
    $("#btnDelete").click(function () {
        deleteEL();
        location.reload();
    });
    $("#btnCancel").click(function () {
        location.href="index.html";
    });
    $("#btnManage").click(function () {
        location.href="index.html";
    });
    $("#btnCancelEdit").click(function () {
        location.href="index.html";
    });
    $("#btnManageEdit").click(function () {
        location.href="index.html";
    });
    $(".btnEdit").click(function() {
        get(this);
    });
    $(".btnrem").click(function () {
        removeEL(this);
    });
}); 