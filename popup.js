

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      


               html = $("body");
               //html = $("#data");
               articles = $(html).find("tr.gsc_a_tr");

               var output = "title\tauthor\tjournal\tcited\tyear\n";
               articles.each(function(){
                title = $(this).find("a.gsc_a_at").text();
                author = $(this).find("div.gs_gray:first").text();
                journal = $(this).find("div.gs_gray:not(first)").text();
                cited = $(this).find("a.gsc_a_ac").text();
                year = $(this).find("span.gsc_a_h").text();

                output += title+"\t"+author+"\t"+journal+"\t"+cited+"\t"+year+"\n"

               });

               alert("Downloading will start shortly");
var element = document.createElement('a');
element.setAttribute('href', 'data:text/text;charset=utf-8,' +      encodeURI(output));
element.setAttribute('download', "citation.tsv");
element.click();








    }
  }
);
