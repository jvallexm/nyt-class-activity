const apikey = "f6476d7762e54a2c8da7593eb46dec0c";

function getData(q,limit,start,end) {
	const url="http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=" + q + "&limit=" + limit;
	if (start !== undefined)
		url += "&begin_date=" + start;
	if (end !== undefined)
		url += "&end_date=" + end;

	$.ajax({
		method: "GET", 
		url: " "
	})
	.done(function(data) {
		return data;
	})
}
$(document).ready(function(){
	$("body").empty();
	$("body").text(getData("jack kirby", 5));
});
