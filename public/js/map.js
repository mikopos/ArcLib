
let raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

let sourceLayer = new ol.source.Vector({
    wrapX:false
});

let vectorLayer = new ol.layer.Vector({
    source: sourceLayer
})

let map = new ol.Map({
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