
let raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

let sourceLayer = new ol.source.Vector({
    wrapX:false
});

let vectorLayer = new ol.layer.Vector({
    source: sourceLayer
});

let map = new ol.Map({
    layers: [raster, vectorLayer],
    target: 'map',
    view: new ol.View({
        center: [1163747.714729, 6683705.090302],
        zoom: 4
    })
});

map.on('click', function(evt){
    /* Uncomment the constructor of your preference to create the arc*/
    // let layer = createArcWithAngle(evt.coordinate, 3000000, 100, 'S', 60);
    let layer = createArcwithDirectionInDegrees(evt.coordinate, 3000000, 100, 270, 60);
    map.addLayer(layer);
    createPin(evt.coordinate);
});

function createPin(coord) {

    let iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(coord)
    });

    let iconStyle = new ol.style.Style({
        image: new ol.style.Icon(({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '../assets/icons/location-pin.png'
        }))
    });

    iconFeature.setStyle(iconStyle);

    sourceLayer.addFeature(iconFeature);

    vectorLayer = new ol.layer.Vector({
        source: sourceLayer
    });

    map.addLayer(vectorLayer);

}
