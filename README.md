# Sardegna-Strade

## Dataset

1. Link al dataset: http://webgis2.regione.sardegna.it/catalogodati/card.jsp?uuid=R_SARDEG:11111111-2222-1111-1111-111111150319
2. mapshaper vg250_L.shp -proj wgs84 -o format=geojson germany.json
   
## OpenStreetMap

- Overpass Turbo query: https://overpass-turbo.eu/
	/*
	This has been generated by the overpass-turbo wizard.
	The original search was:
	“road”
	*/
	[out:json][timeout:200];
	area["ISO3166-1"="IT"]->.boundaryarea;
	// gather results
	(
		// query part for: “road”
		way(area.boundaryarea)["highway"="primary"];
	);
	// print results
	out body;
	>;
	out skel qt;