var size = 0;
var placement = 'point';

var style_LabelSungai_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Plus Jakarta Sans\', sans-serif";
    var labelFill = "#808b89";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("NamaSungai") !== null) {
        labelText = String(feature.get("NamaSungai"));
    }
    var style = [ new ol.style.Style({
        
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
