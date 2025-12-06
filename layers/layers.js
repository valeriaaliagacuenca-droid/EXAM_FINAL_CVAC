var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Sombras_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sombras<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sombras_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8047635.828757, -1897964.734941, -7880138.784818, -1794648.865124]
        })
    });
var lyr_DEM_prov_Arequipa_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_prov_Arequipa<br />\
    <img src="styles/legend/DEM_prov_Arequipa_2_0.png" /> <= 1356.4000<br />\
    <img src="styles/legend/DEM_prov_Arequipa_2_1.png" /> 1356.4000 - 2520.8000<br />\
    <img src="styles/legend/DEM_prov_Arequipa_2_2.png" /> 2520.8000 - 3685.2000<br />\
    <img src="styles/legend/DEM_prov_Arequipa_2_3.png" /> 3685.2000 - 4849.6000<br />\
    <img src="styles/legend/DEM_prov_Arequipa_2_4.png" /> > 4849.6000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_prov_Arequipa_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8047635.828757, -1897964.734941, -7880138.784818, -1794648.865124]
        })
    });
var lyr_Aspecto_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aspecto<br />\
    <img src="styles/legend/Aspecto_3_0.png" /> Norte<br />\
    <img src="styles/legend/Aspecto_3_1.png" /> Este<br />\
    <img src="styles/legend/Aspecto_3_2.png" /> Sur<br />\
    <img src="styles/legend/Aspecto_3_3.png" /> Oeste<br />\
    <img src="styles/legend/Aspecto_3_4.png" /> Norte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Aspecto_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8047635.828724, -1897964.734981, -7880138.784850, -1794648.865104]
        })
    });
var format_Distriros_prov_Arequipa_4 = new ol.format.GeoJSON();
var features_Distriros_prov_Arequipa_4 = format_Distriros_prov_Arequipa_4.readFeatures(json_Distriros_prov_Arequipa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distriros_prov_Arequipa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distriros_prov_Arequipa_4.addFeatures(features_Distriros_prov_Arequipa_4);
var lyr_Distriros_prov_Arequipa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distriros_prov_Arequipa_4, 
                style: style_Distriros_prov_Arequipa_4,
                popuplayertitle: 'Distriros_prov_Arequipa',
                interactive: true,
    title: 'Distriros_prov_Arequipa<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_0.png" /> 368 - 2394<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_1.png" /> 2394 - 3254<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_2.png" /> 3254 - 6781<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_3.png" /> 6781 - 21517<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_4.png" /> 21517 - 44590<br />\
    <img src="styles/legend/Distriros_prov_Arequipa_4_5.png" /> 44590 - 239152<br />' });
var format_prov_arequipa_5 = new ol.format.GeoJSON();
var features_prov_arequipa_5 = format_prov_arequipa_5.readFeatures(json_prov_arequipa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prov_arequipa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prov_arequipa_5.addFeatures(features_prov_arequipa_5);
var lyr_prov_arequipa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_prov_arequipa_5, 
                style: style_prov_arequipa_5,
                popuplayertitle: 'prov_arequipa',
                interactive: true,
                title: '<img src="styles/legend/prov_arequipa_5.png" /> prov_arequipa'
            });
var lyr_Pendiente_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendiente<br />\
    <img src="styles/legend/Pendiente_6_0.png" /> <= 10.0000<br />\
    <img src="styles/legend/Pendiente_6_1.png" /> 10.0000 - 25.0000<br />\
    <img src="styles/legend/Pendiente_6_2.png" /> 25.0000 - 40.0000<br />\
    <img src="styles/legend/Pendiente_6_3.png" /> 40.0000 - 55.0000<br />\
    <img src="styles/legend/Pendiente_6_4.png" /> 55.0000 - 55.0000<br />\
    <img src="styles/legend/Pendiente_6_5.png" /> 55.0000 - 70.0000<br />\
    <img src="styles/legend/Pendiente_6_6.png" /> > 70.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendiente_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8047635.828757, -1897964.734941, -7880138.784818, -1794648.865124]
        })
    });
var format_centros_educativos_prov_arequipa_7 = new ol.format.GeoJSON();
var features_centros_educativos_prov_arequipa_7 = format_centros_educativos_prov_arequipa_7.readFeatures(json_centros_educativos_prov_arequipa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centros_educativos_prov_arequipa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centros_educativos_prov_arequipa_7.addFeatures(features_centros_educativos_prov_arequipa_7);
var lyr_centros_educativos_prov_arequipa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_centros_educativos_prov_arequipa_7, 
                style: style_centros_educativos_prov_arequipa_7,
                popuplayertitle: 'centros_educativos_prov_arequipa',
                interactive: true,
    title: 'centros_educativos_prov_arequipa<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_0.png" /> Básica Alternativa - Avanzado<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_1.png" /> Básica Alternativa - Inicial e Intermedio<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_2.png" /> Básica Especial - Inicial<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_3.png" /> Básica Especial - Primaria<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_4.png" /> Básica Especial - PRITE<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_5.png" /> Escuela Superior Pedagógica<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_6.png" /> Escuela Superior Tecnológica<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_7.png" /> Inicial - Cuna<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_8.png" /> Inicial - Cuna Jardín<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_9.png" /> Inicial - Jardín<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_10.png" /> Inicial No Escolarizado<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_11.png" /> Instancia de Apoyo<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_12.png" /> Primaria<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_13.png" /> Secundaria<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_14.png" /> Superior Formación Artística<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_15.png" /> Superior Pedagógica<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_16.png" /> Superior Tecnológica<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_17.png" /> Técnico Productiva - CETPRO<br />\
    <img src="styles/legend/centros_educativos_prov_arequipa_7_18.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Sombras_1.setVisible(true);lyr_DEM_prov_Arequipa_2.setVisible(true);lyr_Aspecto_3.setVisible(true);lyr_Distriros_prov_Arequipa_4.setVisible(true);lyr_prov_arequipa_5.setVisible(true);lyr_Pendiente_6.setVisible(true);lyr_centros_educativos_prov_arequipa_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sombras_1,lyr_DEM_prov_Arequipa_2,lyr_Aspecto_3,lyr_Distriros_prov_Arequipa_4,lyr_prov_arequipa_5,lyr_Pendiente_6,lyr_centros_educativos_prov_arequipa_7];
lyr_Distriros_prov_Arequipa_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDDPTO': 'IDDPTO', 'IDPROV': 'IDPROV', 'NOMBDIST': 'Nombre del distrito', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AR_1': 'SHAPE_AR_1', 'AREA_MINAM': 'AREA_MINAM', 'Hiper_oficial_dist': 'página oficial', 'Imagen_dist': 'Imagen', });
lyr_prov_arequipa_5.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Nombre de provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', });
lyr_centros_educativos_prov_arequipa_7.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel de educación', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Distriros_prov_Arequipa_4.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'IDDIST': 'Hidden', 'IDDPTO': 'Hidden', 'IDPROV': 'Hidden', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'Hidden', 'NOMBDEP': 'Hidden', 'DCTO': 'Hidden', 'LEY': 'Hidden', 'FECHA': 'Hidden', 'NOM_CAP': 'Hidden', 'SHAPE_LENG': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LE_1': 'Hidden', 'SHAPE_AR_1': 'Hidden', 'AREA_MINAM': 'Hidden', 'Hiper_oficial_dist': 'ExternalResource', 'Imagen_dist': 'ExternalResource', });
lyr_prov_arequipa_5.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', });
lyr_centros_educativos_prov_arequipa_7.set('fieldImages', {'fid': 'Hidden', 'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'Hidden', 'Ubigeo': 'Hidden', 'Departamento': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Poblado': 'Hidden', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'Hidden', 'Nivel / Modalidad': 'TextEdit', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_Distriros_prov_Arequipa_4.set('fieldLabels', {'NOMBDIST': 'header label - always visible', 'Hiper_oficial_dist': 'header label - always visible', 'Imagen_dist': 'header label - always visible', });
lyr_prov_arequipa_5.set('fieldLabels', {'NOMBPROV': 'header label - always visible', });
lyr_centros_educativos_prov_arequipa_7.set('fieldLabels', {'Nivel / Modalidad': 'header label - always visible', });
lyr_centros_educativos_prov_arequipa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});