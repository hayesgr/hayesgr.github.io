function display_title(){
	var html = '';
		html += '<div class="title-page">';
		html += '<div class="title">';
		html += '<h1>Hayes GR</h1>';
		html += '</div><!--title-->';
		html += '</div><!--content-->';
	document.getElementById("mainbody").innerHTML = html;
}




function pagelayout(){
	var html = '';
	html += '<div id="mainMenu" class="header">';
	html += menu(0);
	html += '</div>';//header
	html += '<div id="content" class="content">';
	html += game_state['charMenu']==1? charMenu():'';
	html += game_state['fileMenu']==1? fileMenu():'';
	html += '</div>';//content
		
	document.getElementById("mainbody").innerHTML = html;
}


function menu(){
	html = '';
	html += '<nav>';
	html += '<ul>';
	html += '<li><button onclick="toggle(\'fileMenu\')">File</button></li>';
	html += '<li><button onclick="toggle(\'charMenu\')">Character</button></li>';
	html += '</ul>';
	html += '</nav>';
	return html;
}


function main(){
	display_title();
}

window.onload = main();