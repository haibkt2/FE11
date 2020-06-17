function $(id){
   return document.getElementById(id);
}
function createEl(tag){
    return document.createElement(tag);
}
function createNode(node){
    return document.createTextNode(node);
}
function valid(v){
    var c = (isNaN(v) && v < 0) ? true : false;
    if(c) alert(error);
    return c;
}
function main(v){
    var min = 100; var max = 0;
    var div_tag;
    div_tag = createEl("div");
        div_tag.className="child_rd";
    for(let i = 0;i <= v; i++){
        // get number random
        var random = Math.ceil(Math.random()*100);
        // create element
        var p_tag = createEl("p");
        var node = createNode("So thu" + i + ":" + random);
        p_tag.appendChild(node);
        //add p tag into div.chlid_rd
        
        div_tag.appendChild(p_tag);
        // set max value
        max = (max < random) ? random : max;
        //set min value
        min = (min < random) ? random : min;
    }
    // display min max
    // max el
    var p_max_tag = createEl("p");
    var max_node = createNode("Max : " + max);
    p_max_tag.appendChild(max_node);
    div_tag.appendChild(p_max_tag);
    //min el
    var p_min_tag = createEl("p");
    var min_node = createNode("Min : " + min);
    p_min_tag.appendChild(min_node);
    div_tag.appendChild(p_min_tag);

    // display number random
	// add div tag into div#out_rd
    $("out_rd").appendChild(div_tag);

}
$("id_bt_random").onclick=function(){
    //vail
    var v_input = $("id_input").value;
    //
    if(!valid(v_input)){
    //
    var el_arr = document.getElementsByClassName("child_rd");
    if(el_arr.length > 0){
        el_arr[0].remove();
    }
    main(parseInt(v_input));
}
}