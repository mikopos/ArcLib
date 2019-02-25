function createArcWithAngle(rawCenter, radius, segments, direction, angle) {

    let center = centerBeautify(rawCenter);
    let gAngle = directionBeautify(direction, angle);

    let pointList = [];
    pointList.push([center.x, center.y]);

    let segmentAngle = segments + 1;
    for (let i = 0; i < segmentAngle; i++) {
        let differentialAngle = gAngle.alpha - (gAngle.alpha - gAngle.omega) * i / (segmentAngle - 1);
        let x = center.x + radius * Math.cos(differentialAngle * Math.PI / 180);
        let y = center.y + radius * Math.sin(differentialAngle * Math.PI / 180);
        let point = [x, y];
        pointList.push(point);
    }
    pointList.push([center.x, center.y]);

    for (let i = 1 ; i<=2 ; i++){
        if (i === 1){
           let feature = createFeature(pointList);
           let vectorStyle = createArcStyle([51,204,255,0.2], [51,204,255,0.2], 2);
           let sourceVector = createSourceVector(feature);

           return createLayerVector(sourceVector, vectorStyle);
        }
    }
}


function createArcWithCoords(center, segments, direction, x, y) {}

function arcFeatures(){}

function removeArc(){}

function editArc(){}

function getArcAllSegments(){}

function getSurfaceOfArc(){}

function centerBeautify(center){
    return {x:center[0], y:center[1]};
}

function createArcStyle(fillColor, strokeColor, strokeWidth){
    let fill = new ol.style.Fill({
        color: fillColor
    });

    let style = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: strokeColor,
            width: strokeWidth
        })
    });
    style.setFill(fill);
    return style;
}

function directionBeautify(direction, angle){
    let alpha = 0;
    let omega = 0;

    if(direction === 'N'){
        alpha = 90 - angle/2;
        omega = 90 + angle/2;
    }
    else if(direction === 'S'){
        alpha = 270 - angle/2;
        omega = 270 + angle/2;
    }
    else if(direction === 'W'){
        alpha = 180 - angle/2;
        omega = 180 + angle/2;
    }
    else if(direction === 'E'){
        alpha = 360 - angle/2;
        omega = 360 + angle/2;
    }
    else if(direction === 'NW'){
        alpha = 90 + angle/4;
        omega = 180 - angle/4;
    }
    else if(direction === 'NE'){
        alpha = angle/4;
        omega = 90 - angle/4;
    }
    else if(direction === 'SW'){
        alpha = 180 + angle/4;
        omega = 270 - angle/4;
    }
    else if (direction === 'SE'){
        alpha = 270 + angle/4;
        omega = 360 - angle/4;
    }
    else{
        alpha = 0;
        omega = 360;
    }

    return {alpha: alpha, omega: omega};
}

function createFeature(pointList){
    return new ol.Feature({
        geometry: new ol.geom.Polygon([pointList])
    });
}

function createSourceVector(feature){
    return new ol.source.Vector({
        features: [feature]
    });
}

function createLayerVector(sourceVector, vectorStyle){
    return new ol.layer.Vector({
        source: sourceVector,
        style: vectorStyle
    });
}