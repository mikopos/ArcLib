
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
        center: [1163747.714729, 6683705.090302],
        zoom: 4
    })
});

map.on('click', function(evt){
    console.info(evt.coordinate);
});