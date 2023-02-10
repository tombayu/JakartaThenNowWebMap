var size = 0;
var placement = 'point';
function categories_Then_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,250,249,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kampung':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,243,244,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,215,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kebun/Lahan Kosong':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,215,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lahan Kosong Berpenghuni':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,215,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Perairan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(191,213,223,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,229,210,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,243,244,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,243,244,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sawah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(177,205,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Terbangun':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,243,244,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(65,67,220,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Then_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Kelas");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Then_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
