/**
 * This file was generated from MapboxPolyline.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface MapboxPolylineContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pointList?: ListValue;
    latitudeAttr?: ListAttributeValue<Big>;
    longitudeAttr?: ListAttributeValue<Big>;
}

export interface MapboxPolylinePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    pointList: {} | { type: string } | null;
    latitudeAttr: string;
    longitudeAttr: string;
}
