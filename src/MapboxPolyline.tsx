import { createElement, FunctionComponent } from "react";
import { Polyline } from "react-leaflet";

import { MapboxPolylineContainerProps } from "../typings/MapboxPolylineProps";

const MapboxPolyline: FunctionComponent<MapboxPolylineContainerProps> = props => {
    const { pointList, latitudeAttr, longitudeAttr } = props;

    // make sure markers are loaded
    if (!pointList || pointList.status !== "available" || pointList.items === undefined) {
        return null;
    }

    // make sure attributes are set
    if (!latitudeAttr || !longitudeAttr) {
        return null;
    }

    // read coordinates
    const path: Array<[number, number]> = pointList.items.map(item => [
        latitudeAttr.get(item).value?.toNumber() || 0,
        longitudeAttr.get(item).value?.toNumber() || 0
    ]);

    return <Polyline positions={path} />;
};

export default MapboxPolyline;
