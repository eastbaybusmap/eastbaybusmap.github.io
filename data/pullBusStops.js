#target illustrator  
  
busStops();
function busStops(){  
	
	if(!documents.length) return;  

	var doc = app.activeDocument;  

	var stopsLayer = doc.layers["stops"];
	var stopNamesLayer = stopsLayer.layers["stop names"];

	var majorIntersectionsLayer = doc.layers["major intersections"];
	var majorIntersectionsStopsLayer = majorIntersectionsLayer.layers["text"];

	var docText = new Array();  
	for (var i = 0; i < stopNamesLayer.textFrames.length; i++)  {
		var currentLabel = stopNamesLayer.textFrames[i];
		docText.push(currentLabel.contents.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")); 
		docText.push(currentLabel.anchor);
	}
	for (var j = 0; j < majorIntersectionsStopsLayer.textFrames.length; j++)  {
		var currentLabel = majorIntersectionsStopsLayer.textFrames[j];
		docText.push(currentLabel.contents.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")); 
		docText.push(currentLabel.anchor);
	}
	   
	var docFile = File('~/Desktop/fart/East Bay Bus Map/data/bus_stop_names.csv');   
	docFile.open('e');  
	docFile.write(docText);  
	docFile.close();  
}  