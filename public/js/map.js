
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
    // console.info(evt.coordinate);
    // console.log(raster.getSource().getProjection().getCode());
    createPin(evt.coordinate);
    let layer = createArcWithAngle(evt.coordinate, 3000000, 100, 'S', 60);
    map.addLayer(layer);
    getSurfaceOfArc(layer);
    // map.addLayer(createArcWithAngle(new ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:3857'), 30, 100, 'S', 60));
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
            src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
        }))
    });

    iconFeature.setStyle(iconStyle);

    sourceLayer.addFeature(iconFeature);

    vectorLayer = new ol.layer.Vector({
        source: sourceLayer
    });

    map.addLayer(vectorLayer);

}
