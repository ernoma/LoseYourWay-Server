<?xml version="1.0" encoding="ISO-8859-1"?>
<sld:StyledLayerDescriptor version="1.0.0"
xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"
xmlns="http://www.opengis.net/sld"
xmlns:sld="http://www.opengis.net/sld"
xmlns:ogc="http://www.opengis.net/ogc"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<sld:NamedLayer>
<sld:Name>style_osm_polygon</sld:Name>
<sld:UserStyle>
<sld:Title>'Polygon'</sld:Title>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>residential</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>1000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#dddddd</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>commercial</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>1000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#f1dad8</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>industrial</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>1000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#ebdae8</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>construction</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>1000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b6b492</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:Or><ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>park</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>recreation_ground</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Or>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b6fdb6</sld:CssParameter>
<sld:CssParameter name="fill-opacity">0.6</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:Or><ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>marina</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>basin</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>reservoir</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>water</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>wetland</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Or>
</ogc:Filter>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b5d0d0</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>waterway</ogc:PropertyName><ogc:Literal>riverbank</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>1500000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b5d0d0</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>man_made</ogc:PropertyName><ogc:Literal>pier</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#ededed</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>retail</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#f1dada</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>yes</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>house</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>apartments</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>commercial</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>hospital</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>train_station</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>industrial</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>college</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>university</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>prison</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>forest</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>50000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#8dc56c</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>forest</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill><sld:GraphicFill><sld:Graphic><sld:ExternalGraphic><sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://192.168.1.85/sld_symbols/forest.png" /><sld:Format>image/png</sld:Format></sld:ExternalGraphic><sld:Size>24</sld:Size></sld:Graphic></sld:GraphicFill></sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:Or><ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>garder</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>basin</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>reservoir</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>water</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>wetland</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Or>
</ogc:Filter>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#cdeab0</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>cemetery</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MinScaleDenominator>25000</sld:MinScaleDenominator>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#a9caae</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>cemetery</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>25000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill><sld:GraphicFill><sld:Graphic><sld:ExternalGraphic><sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://192.168.1.85/sld_symbols/cemetery.png" /><sld:Format>image/png</sld:Format></sld:ExternalGraphic><sld:Size>24</sld:Size></sld:Graphic></sld:GraphicFill></sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>tourism</ogc:PropertyName><ogc:Literal>zoo</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill><sld:GraphicFill><sld:Graphic><sld:ExternalGraphic><sld:OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://192.168.1.85/sld_symbols/zoo.png" /><sld:Format>image/png</sld:Format></sld:ExternalGraphic><sld:Size>24</sld:Size></sld:Graphic></sld:GraphicFill></sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>tourism</ogc:PropertyName><ogc:Literal>zoo</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:LineSymbolizer><sld:Stroke>
<sld:CssParameter name="stroke">#888888</sld:CssParameter>
<sld:CssParameter name="stroke-width">0.5</sld:CssParameter>
<sld:CssParameter name="stroke-opacity">0.2</sld:CssParameter>
</sld:Stroke></sld:LineSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>pitch</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#8ad3af</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>amenity</ogc:PropertyName><ogc:Literal>parking</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#f6eeb6</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>brownfield</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b6b592</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>pitch</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:LineSymbolizer><sld:Stroke>
<sld:CssParameter name="stroke">#888888</sld:CssParameter>
<sld:CssParameter name="stroke-width">0.5</sld:CssParameter>
<sld:CssParameter name="stroke-opacity">0.2</sld:CssParameter>
</sld:Stroke></sld:LineSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>allotments</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#c8b084</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:Or><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>meadow</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>grass</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Or>
</ogc:Filter>
<sld:MaxScaleDenominator>400000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#cfeca8</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:Or><ogc:PropertyIsEqualTo><ogc:PropertyName>leisure</ogc:PropertyName><ogc:Literal>marina</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>basin</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>landuse</ogc:PropertyName><ogc:Literal>reservoir</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>water</ogc:Literal></ogc:PropertyIsEqualTo><ogc:PropertyIsEqualTo><ogc:PropertyName>natural</ogc:PropertyName><ogc:Literal>wetland</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Or>
</ogc:Filter>
<sld:MaxScaleDenominator>750000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#b5d0d0</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
<sld:FeatureTypeStyle>
<sld:Rule>
<ogc:Filter>
<ogc:PropertyIsEqualTo><ogc:PropertyName>building</ogc:PropertyName><ogc:Literal>houseboat</ogc:Literal></ogc:PropertyIsEqualTo>
</ogc:Filter>
<sld:MaxScaleDenominator>50000</sld:MaxScaleDenominator>
<sld:PolygonSymbolizer><sld:Fill>
<sld:CssParameter name="fill">#bca9a9</sld:CssParameter>
</sld:Fill></sld:PolygonSymbolizer>
</sld:Rule>
</sld:FeatureTypeStyle>
</sld:UserStyle>
</sld:NamedLayer>
</sld:StyledLayerDescriptor>
