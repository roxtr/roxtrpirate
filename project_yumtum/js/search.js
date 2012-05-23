jQuery(function($){
			
			
				$.getJSON("restroname.js",function(data)
				{
				$.each(data.results, function(i,data)
				{
	var div_data = "<h1 ><a href='"+data.name+"'></a></h1>";

	$(div_data).appendTo("#restroname");
});
}
);
				
		});