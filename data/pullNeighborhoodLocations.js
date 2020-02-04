#target illustrator  
  
neighborhoodLocation();
function neighborhoodLocation(){  
	
	if(!documents.length) return;  

	var doc = app.activeDocument;  

	var hoodsLayer = doc.layers["neighborhood names"];

	var docText = new Array();  
	for (var i = 0; i < hoodsLayer.textFrames.length; i++)  {
		var currentLabel = hoodsLayer.textFrames[i];
		docText.push(currentLabel.contents.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")); 
		docText.push(currentLabel.anchor);
	}
	   
	var docFile = File('~/Desktop/fart/East Bay Bus Map/data/neighborhoods.csv');   
	docFile.open('e');  
	docFile.write(docText);  
	docFile.close();  

}  