var wms_layers = [];

var format_Now_0 = new ol.format.GeoJSON();
var features_Now_0 = format_Now_0.readFeatures(json_Now_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Now_0 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://jakartasatu.jakarta.go.id/">Jakarta Satu</a>',
});
jsonSource_Now_0.addFeatures(features_Now_0);
var lyr_Now_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Now_0, 
                style: style_Now_0,
                interactive: false,
    title: 'Now<br />\
    <img src="styles/legend/Now_0_0.png" /> Hijau<br />\
    <img src="styles/legend/Now_0_1.png" /> Jalan<br />\
    <img src="styles/legend/Now_0_2.png" /> Kampung<br />\
    <img src="styles/legend/Now_0_3.png" /> Kebun<br />\
    <img src="styles/legend/Now_0_4.png" /> Kebun/Lahan Kosong<br />\
    <img src="styles/legend/Now_0_5.png" /> Lahan Kosong Berpenghuni<br />\
    <img src="styles/legend/Now_0_6.png" /> Perairan<br />\
    <img src="styles/legend/Now_0_7.png" /> Rawa<br />\
    <img src="styles/legend/Now_0_8.png" /> Rel<br />\
    <img src="styles/legend/Now_0_9.png" /> Sawah<br />\
    <img src="styles/legend/Now_0_10.png" /> Terbangun<br />'
        });
var format_Then_1 = new ol.format.GeoJSON();
var features_Then_1 = format_Then_1.readFeatures(json_Then_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Then_1 = new ol.source.Vector({
    attributions: ' &middot; <a href="https://digitalcollections.universiteitleiden.nl/view/item/812291">Batavia en Omstreken, Leiden University</a>',
});
jsonSource_Then_1.addFeatures(features_Then_1);
var lyr_Then_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Then_1, 
                style: style_Then_1,
                interactive: false,
    title: 'Then<br />\
    <img src="styles/legend/Then_1_0.png" /> Jalan<br />\
    <img src="styles/legend/Then_1_1.png" /> Kampung<br />\
    <img src="styles/legend/Then_1_2.png" /> Kebun/Lahan Kosong<br />\
    <img src="styles/legend/Then_1_3.png" /> Lahan Kosong Berpenghuni<br />\
    <img src="styles/legend/Then_1_4.png" /> Perairan<br />\
    <img src="styles/legend/Then_1_5.png" /> Rawa<br />\
    <img src="styles/legend/Then_1_6.png" /> Rel<br />\
    <img src="styles/legend/Then_1_7.png" /> Sawah<br />\
    <img src="styles/legend/Then_1_8.png" /> Terbangun<br />\
    <img src="styles/legend/Then_1_9.png" /> <br />'
        });
var format_LabelKecamatan_2 = new ol.format.GeoJSON();
var features_LabelKecamatan_2 = format_LabelKecamatan_2.readFeatures(json_LabelKecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabelKecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabelKecamatan_2.addFeatures(features_LabelKecamatan_2);
var lyr_LabelKecamatan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LabelKecamatan_2, 
                style: style_LabelKecamatan_2,
                interactive: false,
                title: '<img src="styles/legend/LabelKecamatan_2.png" /> Label Kecamatan'
            });
var format_LabelSungai_3 = new ol.format.GeoJSON();
var features_LabelSungai_3 = format_LabelSungai_3.readFeatures(json_LabelSungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabelSungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabelSungai_3.addFeatures(features_LabelSungai_3);
var lyr_LabelSungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LabelSungai_3, 
                style: style_LabelSungai_3,
                interactive: false,
                title: '<img src="styles/legend/LabelSungai_3.png" /> Label Sungai'
            });
var format_LabelJalan_4 = new ol.format.GeoJSON();
var features_LabelJalan_4 = format_LabelJalan_4.readFeatures(json_LabelJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabelJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabelJalan_4.addFeatures(features_LabelJalan_4);
var lyr_LabelJalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LabelJalan_4, 
                style: style_LabelJalan_4,
                interactive: false,
                title: '<img src="styles/legend/LabelJalan_4.png" /> Label Jalan'
            });
var format_POI_5 = new ol.format.GeoJSON();
var features_POI_5 = format_POI_5.readFeatures(json_POI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_5 = new ol.source.Vector({
    attributions: ' &middot; <a href="tombayu.medium.com">@tombayu</a>',
});
jsonSource_POI_5.addFeatures(features_POI_5);
var lyr_POI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POI_5,
maxResolution:12.602009768517881,
 
                style: style_POI_5,
                interactive: false,
                title: '<img src="styles/legend/POI_5.png" /> POI'
            });

lyr_Now_0.setVisible(true);lyr_Then_1.setVisible(true);lyr_LabelKecamatan_2.setVisible(true);lyr_LabelSungai_3.setVisible(true);lyr_LabelJalan_4.setVisible(true);lyr_POI_5.setVisible(true);
var layersList = [lyr_Now_0,lyr_Then_1,lyr_LabelKecamatan_2,lyr_LabelSungai_3,lyr_LabelJalan_4,lyr_POI_5];
lyr_Now_0.set('fieldAliases', {'fid': 'fid', 'Kelas': 'Kelas', });
lyr_Then_1.set('fieldAliases', {'Kelas': 'Kelas', 'Kelas_2': 'Kelas_2', });
lyr_LabelKecamatan_2.set('fieldAliases', {'WADMKK': 'WADMKK', 'Nama': 'Nama', });
lyr_LabelSungai_3.set('fieldAliases', {'NAMA_SUNGA': 'NAMA_SUNGA', 'KETERANGAN': 'KETERANGAN', 'NamaSungai': 'NamaSungai', });
lyr_LabelJalan_4.set('fieldAliases', {'NAMA_JALAN': 'NAMA_JALAN', 'LEBAR_JALA': 'LEBAR_JALA', 'KELAS_JALA': 'KELAS_JALA', 'KETERANGAN': 'KETERANGAN', 'LEVEL_JALA': 'LEVEL_JALA', 'NamaJalan': 'NamaJalan', });
lyr_POI_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Tipe': 'Tipe', });
lyr_Now_0.set('fieldImages', {'fid': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_Then_1.set('fieldImages', {'Kelas': 'TextEdit', 'Kelas_2': 'TextEdit', });
lyr_LabelKecamatan_2.set('fieldImages', {'WADMKK': 'TextEdit', 'Nama': 'TextEdit', });
lyr_LabelSungai_3.set('fieldImages', {'NAMA_SUNGA': 'TextEdit', 'KETERANGAN': 'TextEdit', 'NamaSungai': 'TextEdit', });
lyr_LabelJalan_4.set('fieldImages', {'NAMA_JALAN': 'TextEdit', 'LEBAR_JALA': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LEVEL_JALA': 'TextEdit', 'NamaJalan': 'TextEdit', });
lyr_POI_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Tipe': 'TextEdit', });
lyr_Now_0.set('fieldLabels', {'fid': 'no label', 'Kelas': 'no label', });
lyr_Then_1.set('fieldLabels', {'Kelas': 'no label', 'Kelas_2': 'no label', });
lyr_LabelKecamatan_2.set('fieldLabels', {'WADMKK': 'no label', 'Nama': 'no label', });
lyr_LabelSungai_3.set('fieldLabels', {'NAMA_SUNGA': 'no label', 'KETERANGAN': 'no label', 'NamaSungai': 'no label', });
lyr_LabelJalan_4.set('fieldLabels', {'NAMA_JALAN': 'no label', 'LEBAR_JALA': 'no label', 'KELAS_JALA': 'no label', 'KETERANGAN': 'no label', 'LEVEL_JALA': 'no label', 'NamaJalan': 'no label', });
lyr_POI_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Tipe': 'no label', });
lyr_POI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});