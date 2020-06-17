function $(id){
    document.getElementById(id);
}
function $(tag){
    return document.createElement(tag);
}
function $(node){
    return document.createTextNode(node);
}

function main(v){
    var min=0; var max=0;
    var div_tag;
    for(let i=0;i<=v;i++){
        // get number random
        var random=Math.ceil(Math.random()*100);
        // create element
        var p_tag=createEl("p");
        var node=createNode("So thu" + i + ":" + random);
        p_tag.appendChild(node);
        //add p tag into div.chlid_rd
        div_tag = createElement("div");
        div_tag.className="child_rd";
        div_tag.appendChild(p_tag);
        // add div tag into div#out_rd
        $("out_rd").appendChild(div_tag);
        // set max value
        max = (max<random) ? random:max;
        //set min value
        min = (min<random) ? random:min;
    }
    // display min max
    // max el
    var p_max_tag = createEl("p");
    var max_node = creatNode("Max : " + max);
    div_tag.appendChild(p_max_tag);
    //min el
    var p_min_tag = createEl("p");
    var min_node = createNode("Max : " + min);
    div_tag.appendChild(p_min_tag);
    //
    $("out_rd").appendChild(div_tag);

}
$("id_bt_random").onclick=function(){
    //vail
    var v_input = $("id_input").Value;
    //
    Valid(v_input);
    //
    var el_arr = document.getElementsByClassName("child_rd");
    if(el_arr.length>0){
        el_arr[0].remove();
    }
    main(parseInt(v_input));
}