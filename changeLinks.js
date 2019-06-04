var i = 1;
var base = "https://www.uoguelph.ca/registrar/calendars/undergraduate/2019-2020/courses/";

fixTitles("SEC_SHORT_TITLE_");
fixTitles("CSVIEW1_SHORT_TITLE_");
fixTitles("LIST_VAR6_");

function fixTitles(id) {

	element = document.getElementById(id + i);

	while(element != null) {

		var split = element.innerHTML.split("*");
		var newElement = document.createElement('a');
		var parent = element.parentNode;

		newElement.href = base + split[0].toLowerCase() + split[1] + ".shtml";
		newElement.target = "_blank";
		newElement.class = element.class;
		newElement.innerHTML = element.innerHTML;
		newElement.id = element.id;

		parent.innerHTML = "";
		parent.appendChild(newElement);

		i++
		element = document.getElementById(id + i);
	}

}
