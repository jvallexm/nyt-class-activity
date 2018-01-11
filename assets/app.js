const apikey = "f6476d7762e54a2c8da7593eb46dec0c";

const articles;

function getData(q,limit,start,end) {
	const url="http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=" + q + "&limit=" + limit;
	if (start !== undefined)
		url += "&begin_date=" + start;
	if (end !== undefined)
		url += "&end_date=" + end;

	$.ajax({
		method: "GET", 
		url: url
	})
	.done(function(data) {
		articles = data.response.docs;

	})
}

function renderArticles(articles){
	for (let i = 0; i < articles.length; ++i){
		//headline -- .headline.print_headline
		//author -- .byline.original
		//snippet -- .snippet
		//url -- web_url
	}
}
function createArticle(headline,author,snippet,url){
	let newArticle=$("<div>");
	let header=$("<a>").attr("href", url);
	$("<h1>").text(headline).appendTo(header);
	header.appendTo(newArticle);
	$("<p>").text(snippet).appendTo(newArticle);
	//here we append our new article to the div where articles go
}

$(document).ready(function(){
	$("body").empty();
	$("body").text(getData("jack kirby", 5));
});
