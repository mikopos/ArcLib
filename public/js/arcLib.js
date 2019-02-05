function createArcWithAngle(center, radius, segments, direction, angle) {

    let alpha = 0;
    let omega = 0;

    if(direction=='N'){
        alpha = 90 - angle/2;
        omega = 90 + angle/2;
    }
    else if(direction=='S'){
        alpha = 270 - angle/2;
        omega = 270 + angle/2;
    }
    else if(direction=='W'){
        alpha = 180 - angle/2;
        omega = 180 + angle/2;
    }
    else if(direction=='E'){
        alpha = 360 - angle/2;
        omega = 360 + angle/2;
    }
    else if(direction=='NW'){
        alpha = 90 + angle/4;
        omega = 180 - angle/4;
    }
    else if(direction=='NE'){
        alpha = angle/4;
        omega = 90 - angle/4;
    }
    else if(direction=='SW'){
        alpha = 180 + angle/4;
        omega = 270 - angle/4;
    }
    else if (direction=='SE'){
        alpha = 270 + angle/4;
        omega = 360 - angle/4;
    }
    else{
        alpha = 0;
        omega = 360;
    }

    let pointList = [];
    pointList.push([center.x, center.y]);


    let dAngle = segments + 1;
    for (let i = 0; i < dAngle; i++) {
        let Angle = alpha - (alpha - omega) * i / (dAngle - 1);
        let x = center.x + radius * Math.cos(Angle * Math.PI / 180);
        let y = center.y + radius * Math.sin(Angle * Math.PI / 180);

        let point = [x, y];

        pointList.push(point);

    }

    pointList.push([center.x, center.y]);


    for (let i = 1 ; i<=2 ; i++){
        if (i ==1){
            featureArcOutside = new ol.Feature({
                geometry: new ol.geom.Polygon([pointList])
            });

            sourceArcOutside = new ol.source.Vector({
                features: [featureArc]
            });

            let layerArcOutside = new ol.layer.Vector({
                source: sourceArc,
                style: styleArc
            });
            map.addLayer(layerArcOutside);

        }
    }
}


function createArcWithCoords(center, segments, direction, x, y) {}

function arcFeatures(){}

function removeArc(){}

function editArc(){}

function getArcAllSegments(){}

function getSurfaceOfArc(){}
