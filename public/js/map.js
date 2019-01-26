
var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var sourceLayer = new ol.source.Vector({
    wrapX:false
});

var vectorLayer = new ol.layer.Vector({
    source: sourceLayer
})

var map = new ol.Map({
    layers: [raster, vectorLayer],
    target: 'map',
    view: new ol.View({
        center: [-11000000, 4600000],
        zoom: 4
    })
});
