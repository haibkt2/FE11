function $(id) {
	document.getElementById(id);
}
function createEl(tag) {
	return document.createElement(tag);
}
function createNode(node) {
	return document.createTextNode(node);
}
function main(v) {
	var min = 100, max = 0;
	var div_tag = createEl("div");
	div_tag.className = "child_rd";
	for(let i = 1; i <= v; i++){
		// get number random
		var random = Math.ceil(Math.random()*100);
		// create element
		var p_tag = createEl("p");
		var node = createNode("Number " + i +" : " + random);
		p_tag.appendChild(node);
		// add p tag into div.child_rd
		div_tag.appendChild(p_tag);
		// set max value
		max = (max < random) ? random : max;
		// set min value
		min = (min > random) ? random : min;
	}
	// display min max
	// max el
	var p_max_tag = createEl("p");
	var max_node = createNode("Max  : " + max);
	div_tag.appendChild(p_max_tag);
	// min el
	var p_min_tag = createEl("p");
	var min_node = createNode("Min : " + min);
	div_tag.appendChild(p_min_tag);

	// display number random
	// add div tag into div#out_rd
	$("out_rd").appendChild(div_tag);
}
$("id_bt_random").onclick = function(){
	// valid
	var v_input = $("id_input").value;
	valid(v_input);
	var el_arr = document.getElementsByClassName("child_rd");
	if(el_arr.length > 0){
		el_arr[0].remove();
	}
	main(parseInt(v_input));
}
