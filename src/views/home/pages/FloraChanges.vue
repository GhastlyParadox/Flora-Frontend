<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-left font-weight-regular" cols="11" offset="1" md="10" lg="8" offset-lg="3">
          <p :class="{'headline': $vuetify.breakpoint.mdAndUp, 'title': $vuetify.breakpoint.smAndDown}">Additions and Name Changes to <em>Michigan Flora</em></p>
          <v-divider class="mb-4"></v-divider>
          <h3 class="mb-3">New Species added to the website from the 2016&nbsp;field season&nbsp;(7&nbsp;total)</h3>

          <p>Ampelamus laevis</p>

          <p>Botrychium tenebrosum (split from B. simplex)</p>

          <p>Crocosmia ×crocosmiiflora</p>

          <p>Hypericum swinkianum (newly described split from H. kalmianum)</p>

          <p>Liquidambar styraciflua</p>

          <p>Microthlaspi perfoliatum</p>

          <p>Rhamnus davurica</p>

          <p>&nbsp;</p>

          <h3 class="mb-3">New Species added to the website from the 2015&nbsp;field season&nbsp;(6&nbsp;total)</h3>

          <p>Alchemilla mollis</p>

          <p>Bothriochloa laguroides</p>

          <p>Colchicum autumnale</p>

          <p>Dioscorea polystachya</p>

          <p>Eichhornia crassipes</p>

          <p>Galanthus elwesii</p>

          <p>Galium pedemontanum</p>

          <p>Juncus validus</p>

          <p>Nicotiana tabacum</p>

          <p>Nymphoides peltata</p>

          <p>Pistia stratiotes</p>

          <p>&nbsp;</p>

          <h3 class="mb-3">New Species added to the website from the 2014&nbsp;field season&nbsp;(11&nbsp;total)</h3>

          <p>Allium carinatum</p>

          <p>Chelone lyonii</p>

          <p>Jasione montana</p>

          <p>Juncus dichotomus</p>

          <p>Juncus ranarius</p>

          <p>Juncus pylaei</p>

          <p>Luzula luzuloides</p>

          <p>Rubus parvifolius<br>
            Senecio vernalis</p>

          <p>Senecio viscosus</p>

          <p>Tanacetum coccineum</p>

          <p>&nbsp;</p>

          <h3 class="mb-3">New Species added to the website from the 2013&nbsp;field season&nbsp;(6&nbsp;total)</h3>

          <p>Elsholtzia ciliata</p>

          <p>Hedera helix</p>

          <p>Myriophyllum aquaticum</p>

          <p>Picea pungens</p>

          <p>Rubus phoenicolasius</p>

          <p>Schoenoplectiella mucronata</p>

          <p>&nbsp;</p>

          <h3 class="mb-3">New Species added to the website from the 2012&nbsp;field season&nbsp;(27&nbsp;total)</h3>

          <p>Acalypha ostryifolia</p>

          <p>Agastache rugosa</p>

          <p>Anemone blanda</p>

          <p>Aralia spinosa</p>

          <p>Artemisia serrata</p>

          <p>Aronia arbutifolia</p>

          <p>Arthraxon hispidus</p>

          <p>Chenopodium polyspermum</p>

          <p>Cyperus iria</p>

          <p>Eranthis hyemalis</p>

          <p>Eriochloa contracta</p>

          <p>Euphorbia serpens</p>

          <p>Exochorda racemosa</p>

          <p>Geranium sibiricum</p>

          <p>Hibiscus syriacus</p>

          <p>Hydrocotyle ranunculoides</p>

          <p>Iris ×vinicolor</p>

          <p>Magnolia acuminata</p>

          <p>Molinia caerulea</p>

          <p>Napaea dioica</p>

          <p>Nicotiana alata</p>

          <p>Phyllostachys nigra</p>

          <p>Pinus rigida</p>

          <p>Spiraea nipponica</p>

          <p>Spiraea prunifolia</p>

          <p>Tripidium ravennae</p>

          <p>Viburnum sieboldii</p>

          <p>&nbsp;</p>

          <h3 class="mb-3">Additions and Name Changes to <em>Michigan Flora</em>, Volumes 1-3, in the "Field Manual"</h3>

          <p>Acalypha gracilens — add</p>

          <p>Acer campestre — add</p>

          <p>Acer ginnala — add</p>

          <p>Acer nigrum — add (split from A. saccharum)</p>

          <p>Acinos arvensis — Clinopodium acinos</p>

          <p>Aconitum napellus — add</p>

          <p>Acorus americanus — add (split from A. calamus)</p>

          <p>Aegilops cylindrica — add</p>

          <p>Agropyron cristatum — add</p>

          <p>Agropyron dasystachyum — Elymus lanceolatus</p>

          <p>Agropyron repens — Elymus repens</p>

          <p>Agropyron smithii — Pascopyrum smithii</p>

          <p>Agropyron spicatum — Pseudoroegneria spicata</p>

          <p>Agropyron trachycaulum — Elymus trachycaulus</p>

          <p>Agrostis scabra — add (split from A. hyemalis)</p>

          <p>Agrostis tenuis — Agrostis capillaris</p>

          <p>Aira caryophyllea — add</p>

          <p>Alisma plantago-aquatica — delete (split into A. subcordatum &amp; A. triviale)</p>

          <p>Alisma subcordatum — add (split from A. plantago-aquatica)</p>

          <p>Alisma triviale — add (split from A. plantago-aquatica)</p>

          <p>Allium burdickii — add (split from A. tricoccum)</p>

          <p>Allium tuberosum — add</p>

          <p>Alnus crispa — Alnus viridis</p>

          <p>Alnus rugosa — Alnus incana</p>

          <p>Alopecurus geniculatus — add</p>

          <p>Alopecurus myosuroides — add</p>

          <p>Alyssum saxatile — Aurinia saxatilis</p>

          <p>Amaranthus gracilis — Amaranthus viridis</p>

          <p>Ampelopsis aconitifolia — add</p>

          <p>Ampelopsis brevipedunculata — add</p>

          <p>Andropogon scoparius — Schizachyrium scoparium</p>

          <p>Anemonella thalictroides — Thalictrum thalictroides</p>

          <p>Anthemis tinctoria — Cota tinctoria</p>

          <p>Apera interrupta — add</p>

          <p>Apera spica-venti — add</p>

          <p>Arabis canadensis — Boechera canadensis</p>

          <p>Arabis divaricarpa — Boechera grahamii</p>

          <p>Arabis drummondii — Boechera stricta</p>

          <p>Arabis glabra — Turritis glabra</p>

          <p>Arabis hirsuta — Arabis pycnocarpa</p>

          <p>Arabis holboellii — Boechera retrofracta</p>

          <p>Arabis laevigata — Boechera laevigata</p>

          <p>Arabis lyrata — Arabidopsis lyrata</p>

          <p>Arabis missouriensis — Boechera missouriensis</p>

          <p>Arabis perstellata — Boechera dentata</p>

          <p>Aralia elata — add</p>

          <p>Arenaria lateriflora — Moehringia lateriflora</p>

          <p>Arenaria macrophylla — Moehringia macrophylla</p>

          <p>Arenaria stricta — Minuartia michauxii</p>

          <p>Aristolochia macrophylla — Isotrema macrophyllum</p>

          <p>Aristolochia serpentaria — Endodeca serpentaria</p>

          <p>Armoracia aquatica — Rorippa aquatica</p>

          <p>Arnica lonchophylla — add</p>

          <p>Aster borealis — Symphyotrichum boreale</p>

          <p>Aster brachyactis — Symphyotrichum ciliatum</p>

          <p>Aster ciliolatus — Symphyotrichum ciliolatum</p>

          <p>Aster cordifolius — Symphyotrichum cordifolium</p>

          <p>Aster dumosus — Symphyotrichum dumosum</p>

          <p>Aster ericoides — Symphyotrichum ericoides</p>

          <p>Aster furcatus — Eurybia furcata</p>

          <p>Aster laevis — Symphyotrichum laeve</p>

          <p>Aster lanceolatus — Symphyotrichum lanceolatum</p>

          <p>Aster lateriflorus — Symphyotrichum lateriflorum</p>

          <p>Aster longifolius — Symphyotrichum robynsianum</p>

          <p>Aster macrophyllus — Eurybia macrophylla</p>

          <p>Aster modestus — Canadanthus modestus</p>

          <p>Aster nemoralis — Oclemena nemoralis</p>

          <p>Aster novae-angliae — Symphyotrichum novae-angliae</p>

          <p>Aster ontarionis — Symphyotrichum ontarionis</p>

          <p>Aster oolentangiensis — Symphyotrichum oolentangiense</p>

          <p>Aster paternus — Sericocarpus asteroides</p>

          <p>Aster pilosus — Symphyotrichum pilosum</p>

          <p>Aster praealtus — Symphyotrichum praealtum</p>

          <p>Aster puniceus — Symphyotrichum puniceum</p>

          <p>Aster sagittifolius — Symphyotrichum urophyllum</p>

          <p>Aster sericeus — Symphyotrichum sericeum</p>

          <p>Aster shortii — Symphyotrichum shortii</p>

          <p>Aster solidagineus — Sericocarpus linifolius</p>

          <p>Aster subulatus — Symphyotrichum subulatum</p>

          <p>Aster umbellatus — Doellingeria umbellata</p>

          <p>Atriplex prostrata — add (split from A. patula)</p>

          <p>Barbarea stricta — add</p>

          <p>Belamcanda chinensis — Iris domestica</p>

          <p>Berberis repens — add</p>

          <p>Betula murrayana — add</p>

          <p>Betula populifolia — add</p>

          <p>Bidens coronatus — Bidens trichosperma</p>

          <p>Bouteloua gracilis — add</p>

          <p>Brachyelytrum aristosum — add (split from B. erectum)</p>

          <p>Brachypodium sylvaticum — add</p>

          <p>Brassica alba — Sinapis alba</p>

          <p>Brassica kaber — Sinapis arvensis</p>

          <p>Bromus molliformis — delete (lump with B. hordeaceus )</p>

          <p>Bromus mollis — Bromus hordeaceus</p>

          <p>Bromus nottowayanus — add (split from B. pubescens)</p>

          <p>Buchloe dactyloides — add</p>

          <p>Cacalia atriplicifolia — Arnoglossum atriplicifolium</p>

          <p>Cacalia plantaginea — Arnoglossum plantagineum</p>

          <p>Calamagrostis inexpansa — delete (lump with C. stricta)</p>

          <p>Calamagrostis lacustris — delete( lump with C. stricta)</p>

          <p>Calamintha arkansana — Clinopodium arkansanum</p>

          <p>Callitriche terrestris — add</p>

          <p>Callitriche verna — Callitriche palustris</p>

          <p>Caltha natans — add</p>

          <p>Calylophus serrulatus — Oenothera serrulata</p>

          <p>Calystegia hederacea — Calystegia pubescens</p>

          <p>Calystegia macounii — add</p>

          <p>Calystegia silvatica — add</p>

          <p>Campanula americana — Campanulastrum americanum</p>

          <p>Campanula latifolia — add</p>

          <p>Cardaria draba — Lepidium draba</p>

          <p>Cardaria pubescens — Lepidium appelianum</p>

          <p>Carduus crispus — add</p>

          <p>Carex acutiformis — add</p>

          <p>Carex aenea — Carex foenea</p>

          <p>Carex angustior — Carex echinata</p>

          <p>Carex artitecta — Carex albicans</p>

          <p>Carex assiniboinensis — add</p>

          <p>Carex billingsii — add (split from C. trisperma)</p>

          <p>Carex bushii — add</p>

          <p>Carex cephalantha — Carex echinata</p>

          <p>Carex conjuncta — add</p>

          <p>Carex convoluta — Carex rosea</p>

          <p>Carex duriuscula — add</p>

          <p>Carex echinodes — add (split from C. tenera)</p>

          <p>Carex emmonsii — Carex albicans</p>

          <p>Carex foenea — Carex siccata</p>

          <p>Carex grisea — add (split from C. amphibola)</p>

          <p>Carex heleonastes — add</p>

          <p>Carex howei — delete (lump with C. atlantica)</p>

          <p>Carex inops — add (split from C. pensylvanica)</p>

          <p>Carex lanuginosa — Carex pellita</p>

          <p>Carex meadii — add (split from C. tetanica)</p>

          <p>Carex muricata — add</p>

          <p>Carex novae-angliae — add</p>

          <p>Carex paupercula — Carex magellanica</p>

          <p>Carex rosea — Carex radiata</p>

          <p>Carex rugosperma — Carex tonsa</p>

          <p>Carex sylvatica — add</p>

          <p>Carex texensis — add</p>

          <p>Carex tincta — add</p>

          <p>Carex utriculata — add (split from C. rostrata)</p>

          <p>Carex viridistellata — add (split from C. cryptolepis)</p>

          <p>Carex wiegandii — add</p>

          <p>Carthamus tinctorius — add</p>

          <p>Cassia chamaecrista — Chamaecrista fasciculata</p>

          <p>Cassia hebecarpa — Senna hebecarpa</p>

          <p>Cassia nictitans — Chamaecrista nictitans</p>

          <p>Cassia tora — Senna tora</p>

          <p>Castanea mollissima — add</p>

          <p>Caulophyllum giganteum — add (split from C. thalictroides)</p>

          <p>Centaurea maculosa — Centaurea stoebe</p>

          <p>Centaurea repens — Rhaponticum repens</p>

          <p>Cerastium brachypodum — add (split from C. nutans)</p>

          <p>Cerastium pumilum — add</p>

          <p>Cerastium velutinum — add (split from C. arvense)</p>

          <p>Chaenomeles speciosa — add</p>

          <p>Chenopodium ambrosioides — Dysphania ambrosioides</p>

          <p>Chenopodium aristatum — Dysphania aristata</p>

          <p>Chenopodium berlandieri — add (split from C. album)</p>

          <p>Chenopodium botrys — Dysphania botrys</p>

          <p>Chenopodium hybridum — Chenopodium simplex</p>

          <p>Chenopodium subglabrum — Chenopodium pratericola</p>

          <p>Chorispora tenella — add</p>

          <p>Chrysanthemum ×superbum — Leucanthemum ×superbum</p>

          <p>Chrysanthemum balsamita — Tanacetum balsamita</p>

          <p>Chrysanthemum leucanthemum — Leucanthemum vulgare</p>

          <p>Chrysanthemum parthenium — Tanacetum parthenium</p>

          <p>Chrysanthemum serotinum — Leucanthemella serotina</p>

          <p>Chrysopsis camporum — Heterotheca camporum</p>

          <p>Chrysopsis villosa — Heterotheca villosa</p>

          <p>Cimicifuga racemosa — Actaea racemosa</p>

          <p>Circaea lutetiana — Circaea canadensis</p>

          <p>Claytonia sibirica — add</p>

          <p>Clematis terniflora — add</p>

          <p>Cleome hassleriana — Tarenaya hassleriana</p>

          <p>Cleome serrulata — Peritoma serrulata</p>

          <p>Coelorachis cylindrica — add</p>

          <p>Coincya monensis — add</p>

          <p>Consolida ambigua — Consolida ajacis</p>

          <p>Corispermum americanum — add (split from C. hyssopifolium)</p>

          <p>Corispermum orientale — Corispermum villosum</p>

          <p>Corispermum pallasii — add (split from C. hyssopifolium)</p>

          <p>Cornus stolonifera — Cornus sericea</p>

          <p>Coronilla varia — Securigera varia</p>

          <p>Corydalis sempervirens — Capnoides sempervirens</p>

          <p>Corydalis solida — add</p>

          <p>Corynephorus canescens — add</p>

          <p>Cotinus coggygria — add</p>

          <p>Cotoneaster adpressus — add</p>

          <p>Cotoneaster divaricatus — add</p>

          <p>Crataegus apiomorpha — Crataegus fluviatilis</p>

          <p>Crataegus basilica — Crataegus schuettei</p>

          <p>Crataegus beata — delete (lump with C. populnea)</p>

          <p>Crataegus brumalis — delete (lump with C. macrosperma)</p>

          <p>Crataegus compta — delete (lump with C. populnea)</p>

          <p>Crataegus dilatata — Crataegus coccinioides</p>

          <p>Crataegus disperma — delete</p>

          <p>Crataegus filipes — delete (lump with C. jesupii)</p>

          <p>Crataegus foetida — delete (lump with C. intricata)</p>

          <p>Crataegus fontanesiana — delete (lump with C. crus-galli)</p>

          <p>Crataegus gravis — delete (lump with C. populnea)</p>

          <p>Crataegus hillii — Crataegus magniflora</p>

          <p>Crataegus immanis — Crataegus compacta</p>

          <p>Crataegus iracunda — delete (lump with C. populnea )</p>

          <p>Crataegus leiophylla — delete (lump with C. pruinosa)</p>

          <p>Crataegus levis — delete (lump with C. populnea)</p>

          <p>Crataegus merita — delete (lump with C. macrosperma)</p>

          <p>Crataegus nitidula — delete (lump with C. punctata)</p>

          <p>Crataegus pedicellata — Crataegus coccinea</p>

          <p>Crataegus pinguis — delete (lump with C. brainerdii)</p>

          <p>Crataegus pringlei — Crataegus coccinea</p>

          <p>Crataegus pringlei — delete (lump with C. coccinea)</p>

          <p>Crataegus rugosa — delete (lump with C. pruinosa)</p>

          <p>Cyperus aristatus — Cyperus squarrosus</p>

          <p>Cyperus filiculmis — Cyperus lupulinus</p>

          <p>Cyperus fuscus — add</p>

          <p>Cyperus rivularis — Cyperus bipartitus</p>

          <p>Cypripedium calceolus — Cypripedium parviflorum</p>

          <p>Danthonia compressa — add</p>

          <p>Daphne mezereum — add</p>

          <p>Dentaria diphylla — Cardamine diphylla</p>

          <p>Dentaria laciniata — Cardamine concatenata</p>

          <p>Dentaria maxima — Cardamine maxima</p>

          <p>Deschampsia flexuosa — Avenella flexuosa</p>

          <p>Desmanthus illinoensis — add</p>

          <p>Desmodium glabellum — add (split from D. paniculatum)</p>

          <p>Desmodium glutinosum — Hylodesmum glutinosum</p>

          <p>Desmodium nudiflorum — Hylodesmum nudiflorum</p>

          <p>Desmodium perplexum — add (split from D. paniculatum)</p>

          <p>Deutzia scabra — add</p>

          <p>Diarrhena americana — Diarrhena obovata</p>

          <p>Dichanthelium polyanthes — add</p>

          <p>Disporum hookeri — Prosartes hookeri</p>

          <p>Disporum maculatum — Prosartes maculata</p>

          <p>Dodecatheon meadia — Primula meadia</p>

          <p>Draba glabella — add</p>

          <p>Duchesnea indica — Potentilla indica</p>

          <p>Dysphania pumilio — add</p>

          <p>Echinochloa esculenta — add (split from E. crusgalli)</p>

          <p>Eleocharis atropurpurea — add</p>

          <p>Eleocharis caribaea — Eleocharis geniculata</p>

          <p>Eleocharis microcarpa — add</p>

          <p>Eleocharis nitida — add</p>

          <p>Eleocharis olivacea — Eleocharis flavescens</p>

          <p>Eleocharis pauciflora — Eleocharis quinqueflora</p>

          <p>Eleocharis smallii — Eleocharis palustris</p>

          <p>Eleutherococcus sieboldianus — add</p>

          <p>Elymus arenarius — Leymus arenarius</p>

          <p>Elymus macgregorii — add (split from E. virginicus)</p>

          <p>Elymus mollis — Leymus mollis</p>

          <p>Epilobium angustifolium — Chamerion angustifolium</p>

          <p>Epilobium brachycarpum — add</p>

          <p>Eragrostis curvula — add</p>

          <p>Eragrostis poaeoides — Eragrostis minor</p>

          <p>Eragrostis tephrosanthes — delete (lump with E. pectinacea)</p>

          <p>Eragrostis trichodes — add</p>

          <p>Eriocaulon septangulare — Eriocaulon aquaticum</p>

          <p>Eriophorum spissum — Eriophorum vaginatum</p>

          <p>Erophila verna — Draba verna</p>

          <p>Euonymus hamiltoniana — add</p>

          <p>Eupatorium coelestinum — Conoclinium coelestinum</p>

          <p>Eupatorium fistulosum — Eutrochium fistulosum</p>

          <p>Eupatorium maculatum — Eutrochium maculatum</p>

          <p>Eupatorium purpureum — Eutrochium purpureum</p>

          <p>Eupatorium rugosum — Ageratina altissima</p>

          <p>Euphorbia davidii — add (split from E. dentata)</p>

          <p>Euphorbia esula — Euphorbia virgata</p>

          <p>Euphorbia obtusata — Euphorbia spathulata</p>

          <p>Euphorbia prostrata — add</p>

          <p>Euthamia remota — Euthamia caroliniana</p>

          <p>Fatoua villosa — add</p>

          <p>Festuca arundinacea — Schedonorus arundinaceus</p>

          <p>Festuca obtusa — Festuca subverticillata</p>

          <p>Festuca octoflora — Vulpia octoflora</p>

          <p>Festuca ovina — Festuca trachyphylla</p>

          <p>Festuca pratensis — Schedonorus pratensis</p>

          <p>Festuca scabrella — Festuca altaica</p>

          <p>Festuca tenuifolia — Festuca filiformis</p>

          <p>Ficus carica — add</p>

          <p>Filago arvensis — Logfia arvensis</p>

          <p>Filipendula ulmaria — add</p>

          <p>Filipendula vulgaris — add</p>

          <p>Forsythia ×intermedia — add</p>

          <p>Frangula purshiana — add</p>

          <p>Froelichia floridana — add</p>

          <p>Froelichia gracilis — add</p>

          <p>Fuirena squarrosa — Fuirena pumila</p>

          <p>Galanthus nivalis — add</p>

          <p>Galega officinalis — add</p>

          <p>Galium mollugo — Galium album</p>

          <p>Gaura biennis — Oenothera gaura</p>

          <p>Gaura coccinea — Oenothera suffrutescens</p>

          <p>Gaura longiflora — Oenothera filiformis</p>

          <p>Gentianopsis procera — Gentianopsis virgata</p>

          <p>Geranium aequale — add (split from G. molle)</p>

          <p>Glyceria melicaria — add</p>

          <p>Gnaphalium helleri — Pseudognaphalium micradenium</p>

          <p>Gnaphalium macounii — Pseudognaphalium macounii</p>

          <p>Gnaphalium obtusifolium — Pseudognaphalium obtusifolium</p>

          <p>Gnaphalium purpureum — Gamochaeta purpurea</p>

          <p>Gnaphalium sylvaticum — Omalotheca sylvatica</p>

          <p>Habenaria blephariglottis — Platanthera blephariglottis</p>

          <p>Habenaria ciliaris — Platanthera ciliaris</p>

          <p>Habenaria clavellata — Platanthera clavellata</p>

          <p>Habenaria dilatata — Platanthera dilatata</p>

          <p>Habenaria flava — Platanthera flava</p>

          <p>Habenaria hookeri — Platanthera hookeri</p>

          <p>Habenaria hyperborea — delete (split into Platanthera aquilonis and P. huronensis)</p>

          <p>Habenaria lacera — Platanthera lacera</p>

          <p>Habenaria leucophaea — Platanthera leucophaea</p>

          <p>Habenaria obtusata — Platanthera obtusata</p>

          <p>Habenaria orbiculata — Platanthera orbiculata</p>

          <p>Habenaria psycodes — Platanthera psycodes</p>

          <p>Habenaria unalascensis — Platanthera unalascensis</p>

          <p>Habenaria viridis — Coeloglossum viride</p>

          <p>Haplopappus ciliatus — Grindelia ciliata</p>

          <p>Hedyotis nigricans — Stenaria nigricans</p>

          <p>Heleochloa schoenoides — Crypsis schoenoides</p>

          <p>Helianthemum bicknellii — Crocanthemum bicknellii</p>

          <p>Helianthemum canadense — Crocanthemum canadense</p>

          <p>Hemicarpha micrantha — Lipocarpha micrantha</p>

          <p>Heracleum mantegazzianum — add</p>

          <p>Heracleum sphondylium — add</p>

          <p>Hierochloë odorata — Hierochloë hirta</p>

          <p>Holcus mollis — add</p>

          <p>Hosta ventricosa — add</p>

          <p>Hydrocharis morsus-ranae — add</p>

          <p>Hylotelephium erythrostictum — add</p>

          <p>Hymenoxys herbacea — Tetraneuris herbacea</p>

          <p>Hypericum adpressum — add</p>

          <p>Hystrix patula — Elymus hystrix</p>

          <p>Iberis sempervirens — add</p>

          <p>Ilex opaca — add</p>

          <p>Iris sibirica — add</p>

          <p>Isopyrum biternatum — Enemion biternatum</p>

          <p>Isotrema tomentosum — add</p>

          <p>Iva xanthiifolia — Cyclachaena xanthiifolia</p>

          <p>Juncus alpinus — Juncus alpinoarticulatus</p>

          <p>Juncus anthelatus — add (split from J. tenuis)</p>

          <p>Juncus compressus — add</p>

          <p>Juncus ensifolius — add</p>

          <p>Kalopanax septemlobus — add</p>

          <p>Kerria japonica — add</p>

          <p>Kochia scoparia — Bassia scoparia</p>

          <p>Kuhnia eupatorioides — Brickellia eupatorioides</p>

          <p>Lactuca muralis — Mycelis muralis</p>

          <p>Lactuca pulchella — Mulgedium pulchellum</p>

          <p>Lamiastrum galeobdolon — add</p>

          <p>Lamprocapnos spectabilis — add</p>

          <p>Lechea villosa — Lechea mucronata</p>

          <p>Ledum groenlandicum — Rhododendron groenlandicum</p>

          <p>Lemna turionifera — add (split from L. minor)</p>

          <p>Leontodon autumnalis — Scorzoneroides autumnalis</p>

          <p>Leontodon taraxacoides — Leontodon saxatilis</p>

          <p>Leptochloa fascicularis — Leptochloa fusca</p>

          <p>Leptoloma cognatum — Digitaria cognata</p>

          <p>Lespedeza bicolor — add</p>

          <p>Lespedeza intermedia — Lespedeza violacea</p>

          <p>Lespedeza stipulacea — Kummerowia stipulacea</p>

          <p>Lespedeza thunbergii — add</p>

          <p>Lespedeza violacea — Lespedeza frutescens</p>

          <p>Leymus racemosus — add</p>

          <p>Lilium martagon — add</p>

          <p>Limonium platyphyllum — add</p>

          <p>Linaria canadensis — Nuttallanthus canadensis</p>

          <p>Listera auriculata — Neottia auriculata</p>

          <p>Listera convallarioides — Neottia convallarioides</p>

          <p>Listera cordata — Neottia cordata</p>

          <p>Lithospermum arvense — Buglossoides arvensis</p>

          <p>Luzula pallidula — add</p>

          <p>Lychnis chalcedonica — Silene chalcedonica</p>

          <p>Lychnis coronaria — Silene coronaria</p>

          <p>Lycopersicon esculentum — Solanum lycopersicum</p>

          <p>Mahonia aquifolium — Berberis aquifolium</p>

          <p>Malus baccata — add</p>

          <p>Malus prunifolia — add</p>

          <p>Malus sieboldii — add</p>

          <p>Malva crispa — Malva verticillata</p>

          <p>Malva rotundifolia — Malva pusilla</p>

          <p>Matricaria perforata — Tripleurospermum inodorum</p>

          <p>Matricaria recutita — Matricaria chamomilla</p>

          <p>Mazus reptans — Mazus miquelii</p>

          <p>Megalodonta beckii — Bidens beckii</p>

          <p>Mentha ×gracilis — add (given fuller treatment)</p>

          <p>Mentha arvensis — Mentha canadensis</p>

          <p>Minuartia dawsonensis — add (split from Arenaria stricta)</p>

          <p>Mirabilis hirsuta — delete (lump with M. albida)</p>

          <p>Miscanthus sacchariflorus — add</p>

          <p>Miscanthus sinensis — add</p>

          <p>Monarda clinopodia — add (split from M. fistulosa)</p>

          <p>Monotropa hypopithys — Hypopitys monotropa</p>

          <p>Muhlenbergia asperifolia — add</p>

          <p>Muscari atlanticum — Muscari neglectum</p>

          <p>Myosurus minimus — add</p>

          <p>Myrica pensylvanica — add</p>

          <p>Myriophyllum exalbescens — Myriophyllum sibiricum</p>

          <p>Myrrhis odorata — add</p>

          <p>Narcissus poeticus — add</p>

          <p>Narcissus pseudonarcissus — add</p>

          <p>Nasturtium microphyllum — add (split from N. officinale)</p>

          <p>Nemopanthus mucronatus — Ilex mucronata</p>

          <p>Nuphar pumila — Nuphar microphylla</p>

          <p>Nymphaea tetragona — Nymphaea leibergii</p>

          <p>Odontites vulgaris — Odontites vernus</p>

          <p>Onosmodium molle — Lithospermum molle</p>

          <p>Orchis rotundifolia — Amerorchis rotundifolia</p>

          <p>Orchis spectabilis — Galearis spectabilis</p>

          <p>Oryzopsis canadensis — Piptatherum canadense</p>

          <p>Oryzopsis pungens — Piptatherum pungens</p>

          <p>Oryzopsis racemosa — Piptatherum racemosum</p>

          <p>Osmorhiza chilensis — Osmorhiza berteroi</p>

          <p>Oxalis fontana — Oxalis stricta</p>

          <p>Oxalis stricta — Oxalis dillenii</p>

          <p>Pachysandra terminalis — add</p>

          <p>Packera glabella — add</p>

          <p>Packera insulae-regalis — add (split from Packera paupercula)</p>

          <p>Panicum boreale — Dichanthelium boreale</p>

          <p>Panicum calliphyllum — delete</p>

          <p>Panicum clandestinum — Dichanthelium clandestinum</p>

          <p>Panicum columbianum — Dichanthelium columbianum</p>

          <p>Panicum commonsianum — Dichanthelium commonsianum</p>

          <p>Panicum commutatum — Dichanthelium commutatum</p>

          <p>Panicum depauperatum — Dichanthelium depauperatum</p>

          <p>Panicum dichotomum — Dichanthelium dichotomum</p>

          <p>Panicum gattingeri — add (split from P. philadelphicum)</p>

          <p>Panicum implicatum — Dichanthelium implicatum</p>

          <p>Panicum latifolium — Dichanthelium latifolium</p>

          <p>Panicum leibergii — Dichanthelium leibergii</p>

          <p>Panicum lindheimeri — Dichanthelium lindheimeri</p>

          <p>Panicum linearifolium — Dichanthelium linearifolium</p>

          <p>Panicum longifolium — add</p>

          <p>Panicum meridionale — Dichanthelium meridionale</p>

          <p>Panicum microcarpon — Dichanthelium microcarpon</p>

          <p>Panicum oligosanthes — Dichanthelium oligosanthes</p>

          <p>Panicum perlongum — Dichanthelium perlongum</p>

          <p>Panicum praecocius — Dichanthelium praecocius</p>

          <p>Panicum sphaerocarpon — Dichanthelium sphaerocarpon</p>

          <p>Panicum spretum — Dichanthelium spretum</p>

          <p>Panicum tuckermanii — add (split from P. philadelphicum)</p>

          <p>Panicum xanthophysum — Dichanthelium xanthophysum</p>

          <p>Papaver pseudo-orientale — add (split from P. orientale)</p>

          <p>Parietaria diffusa — Parietaria judaica</p>

          <p>Parthenium hispidum — delete (lump with P. integrifolium)</p>

          <p>Paspalum ciliatifolium — Paspalum setaceum</p>

          <p>Paspalum laeve — add</p>

          <p>Pennisetum alopecuroides — add</p>

          <p>Persicaria robustior — add</p>

          <p>Phellodendron amurense — add</p>

          <p>Philadelphus ×virginalis — add</p>

          <p>Philadelphus coronarius — add</p>

          <p>Philadelphus inodorus — add</p>

          <p>Philadelphus pubescens — add</p>

          <p>Phlox latifolia — add</p>

          <p>Physalis pubescens — Physalis grisea</p>

          <p>Picea abies — add</p>

          <p>Pimpinella saxifraga — add</p>

          <p>Pinus nigra — add</p>

          <p>Pinus ponderosa — add</p>

          <p>Pinus sylvestris — add</p>

          <p>Plagiobothrys hirtus — Plagiobothrys figuratus</p>

          <p>Platanthera aquilonis — add (split from Habenaria hyperborea)</p>

          <p>Platanthera huronensis — add (split from Habenaria hyperborea)</p>

          <p>Platanthera macrophylla — add (split from Habenaria orbiculata)</p>

          <p>Poa arida — add</p>

          <p>Poa canbyi — Poa secunda</p>

          <p>Poa interior — add (split from P. nemoralis)</p>

          <p>Polygonum amphibium — Persicaria amphibia</p>

          <p>Polygonum arifolium — Persicaria arifolia</p>

          <p>Polygonum careyi — Persicaria careyi</p>

          <p>Polygonum cespitosum — Persicaria longiseta</p>

          <p>Polygonum cilinode — Fallopia cilinodis</p>

          <p>Polygonum convolvulus — Fallopia convolvulus</p>

          <p>Polygonum cuspidatum — Fallopia japonica</p>

          <p>Polygonum hydropiper — Persicaria hydropiper</p>

          <p>Polygonum hydropiperoides — Persicaria hydropiperoides</p>

          <p>Polygonum lapathifolium — Persicaria lapathifolia</p>

          <p>Polygonum orientale — Persicaria orientalis</p>

          <p>Polygonum pensylvanicum — Persicaria pensylvanica</p>

          <p>Polygonum persicaria — Persicaria maculosa</p>

          <p>Polygonum punctatum — Persicaria punctata</p>

          <p>Polygonum sachalinense — Fallopia sachalinensis</p>

          <p>Polygonum sagittatum — Persicaria sagittata</p>

          <p>Polygonum scandens — Fallopia scandens</p>

          <p>Polygonum virginianum — Persicaria virginiana</p>

          <p>Polygonum viviparum — Bistorta vivipara</p>

          <p>Polymnia uvedalia — Smallanthus uvedalia</p>

          <p>Porteranthus stipulatus — Gillenia stipulata</p>

          <p>Porteranthus trifoliatus — Gillenia trifoliata</p>

          <p>Potamogeton capillaceus — Potamogeton bicupulatus</p>

          <p>Potamogeton filiformis — Stuckenia filiformis</p>

          <p>Potamogeton lateralis — delete</p>

          <p>Potamogeton pectinatus — Stuckenia pectinata</p>

          <p>Potamogeton vaginatus — delete (lump with Stuckenia filiformis)</p>

          <p>Potamogeton vaginatus — Stuckenia filiformis</p>

          <p>Potentilla arguta — Drymocallis arguta</p>

          <p>Potentilla bipinnatifida — add</p>

          <p>Potentilla canadensis — add (split from P. simplex)</p>

          <p>Potentilla fruticosa — Dasiphora fruticosa</p>

          <p>Potentilla intermedia — add (split from P. inclinata)</p>

          <p>Potentilla palustris — Comarum palustre</p>

          <p>Potentilla paradoxa — Potentilla supina</p>

          <p>Potentilla pensylvanica — Potentilla litoralis</p>

          <p>Potentilla tridentata — Sibbaldiopsis tridentata</p>

          <p>Potentilla verna — add</p>

          <p>Prenanthes crepidinea — add</p>

          <p>Proboscidea louisiana — original spelling, not “louisianica”</p>

          <p>Prosartes trachycarpa — add</p>

          <p>Prunus alleghaniensis — Prunus umbellata</p>

          <p>Prunus angustifolia — add</p>

          <p>Prunus armeniaca — add</p>

          <p>Prunus cerasifera — delete</p>

          <p>Prunus hortulana — add</p>

          <p>Pseudotsuga menziesii — add</p>

          <p>Psilocarya scirpoides — Rhynchospora scirpoides</p>

          <p>Psoralea psoralioides — Orbexilum pedunculatum</p>

          <p>Puccinellia fernaldii — Torreyochloa fernaldii</p>

          <p>Puccinellia pallida — Torreyochloa pallida</p>

          <p>Pueraria montana — add</p>

          <p>Pyrola rotundifolia — Pyrola americana</p>

          <p>Pyrus calleryana — add</p>

          <p>Pyrus cordata — add</p>

          <p>Quercus coccinea — Quercus ellipsoidalis</p>

          <p>Quercus prinus — Quercus montana</p>

          <p>Quercus shumardii — add</p>

          <p>Ranunculus cymbalaria&nbsp; — Halerpestes cymbalaria</p>

          <p>Ranunculus ficaria — Ficaria verna</p>

          <p>Ranunculus lapponicus&nbsp; — Coptidium&nbsp; lapponicum</p>

          <p>Ranunculus sardous — add</p>

          <p>Ranunculus trichophyllus — add (split from R. longirostris)</p>

          <p>Rhamnus frangula — Frangula alnus</p>

          <p>Rheum rhaponticum — Rheum ×hybridum</p>

          <p>Rhexia mariana — add</p>

          <p>Rhinanthus minor — add</p>

          <p>Rhodotypos scandens — add</p>

          <p>Rhynchospora glomerata — Rhynchospora recognita</p>

          <p>Rhynchospora nitens — add</p>

          <p>Ribes missouriense — add</p>

          <p>Rosa canina — add</p>

          <p>Rosa eglanteria — Rosa rubiginosa</p>

          <p>Rosa virginiana — add</p>

          <p>Rubus bifrons — add</p>

          <p>Rubus caesius — add</p>

          <p>Rumex maritimus — Rumex fueginus</p>

          <p>Rumex occidentalis — add</p>

          <p>Ruppia maritima — Ruppia cirrhosa</p>

          <p>Ruta graveolens — add</p>

          <p>Sagittaria cristata — add (split from S. graminea)</p>

          <p>Salicornia europaea — Salicornia rubra</p>

          <p>Salix atrocinerea — add</p>

          <p>Salix matsudana — add</p>

          <p>Salsola collina — add</p>

          <p>Salsola kali — Salsola tragus</p>

          <p>Sanguisorba minor — Poterium sanguisorba</p>

          <p>Sanicula gregaria — Sanicula odorata</p>

          <p>Saxifraga pensylvanica — Micranthes pensylvanica</p>

          <p>Saxifraga virginiensis — Micranthes virginiensis</p>

          <p>Schedonorus giganteus — add</p>

          <p>Schoenoplectus purshianus — add (split from Scirpus smithii)</p>

          <p>Schrankia nuttallii — Mimosa quadrivalvis</p>

          <p>Scilla forbesii — add</p>

          <p>Scilla luciliae — add</p>

          <p>Scilla siberica — add</p>

          <p>Scirpus acutus — Schoenoplectus acutus</p>

          <p>Scirpus americanus — Schoenoplectus pungens</p>

          <p>Scirpus atrocinctus — add (split from S. cyperinus)</p>

          <p>Scirpus cespitosus — Trichophorum cespitosum</p>

          <p>Scirpus clintonii — Trichophorum clintonii</p>

          <p>Scirpus fluviatilis — Bolboschoenus fluviatilis</p>

          <p>Scirpus georgianus — add (split from S. atrovirens)</p>

          <p>Scirpus hallii — Schoenoplectus hallii</p>

          <p>Scirpus hattorianus — add (split from S. atrovirens)</p>

          <p>Scirpus heterochaetus — Schoenoplectus heterochaetus</p>

          <p>Scirpus hudsonianus — Trichophorum alpinum</p>

          <p>Scirpus olneyi — Schoenoplectus americanus</p>

          <p>Scirpus paludosus — Bolboschoenus maritimus</p>

          <p>Scirpus pedicillatus — add (split from S. cyperinus)</p>

          <p>Scirpus smithii — Schoenoplectus smithii</p>

          <p>Scirpus subterminalis — Schoenoplectus subterminalis</p>

          <p>Scirpus torreyi — Schoenoplectus torreyi</p>

          <p>Scirpus validus — Schoenoplectus tabernaemontani</p>

          <p>Scleria reticularis — add</p>

          <p>Sclerochloa dura — add</p>

          <p>Sedum spurium — Phedimus spurius</p>

          <p>Sedum telephium — Hylotelephium telephium</p>

          <p>Senecio aureus — Packera aurea</p>

          <p>Senecio congestus — Tephroseris palustris</p>

          <p>Senecio indecorus — Packera indecora</p>

          <p>Senecio obovatus — Packera obovata</p>

          <p>Senecio pauperculus — Packera paupercula</p>

          <p>Senecio plattensis — delete (lump with Packera paupercula)</p>

          <p>Setaria glauca — Setaria pumila</p>

          <p>Shepherdia argentea — add</p>

          <p>Silene armeria — Atocion armeria</p>

          <p>Silene dioica — add</p>

          <p>Silene nivea — add</p>

          <p>Silene pratensis — Silene latifolia</p>

          <p>Sisyrinchium campestre — add</p>

          <p>Sisyrinchium farwellii — Sisyrinchium fuscatum</p>

          <p>Sisyrinchium hastile — delete (lump with S. albidum)</p>

          <p>Smilacina racemosa — Maianthemum racemosum</p>

          <p>Smilacina stellata — Maianthemum stellatum</p>

          <p>Smilacina trifolia — Maianthemum trifolium</p>

          <p>Smilax tamnoides — Smilax hispida</p>

          <p>Solidago vossii — add (split from S. houghtonii)</p>

          <p>Sparganium chlorocarpum — Sparganium emersum</p>

          <p>Sparganium minimum — Sparganium natans</p>

          <p>Spartina gracilis — add</p>

          <p>Spiranthes casei&nbsp; — add (split from S. cernua)</p>

          <p>Spiranthes magnicamporum — add (split from S. cernua)</p>

          <p>Spiranthes ochroleuca — add (split from S. cernua)</p>

          <p>Spiranthes ovalis — add</p>

          <p>Spiranthes tuberosa — add</p>

          <p>Spiranthes vernalis — delete</p>

          <p>Sporobolus asper — Sporobolus compositus</p>

          <p>Sporobolus clandestinus — add</p>

          <p>Sporobolus indicus — add</p>

          <p>Stachys arenicola — add (split from S. palustris)</p>

          <p>Stachys aspera — add (split from S. tenuifolia)</p>

          <p>Stachys byzantina — add</p>

          <p>Stachys hispida — add (split from S. tenuifolia)</p>

          <p>Stachys pilosa — add (split from S. palustris)</p>

          <p>Stellaria calycantha — Stellaria borealis</p>

          <p>Stellaria pallida — add</p>

          <p>Stipa avenacea — Piptochaetium avenaceum</p>

          <p>Stipa comata — Hesperostipa comata</p>

          <p>Stipa spartea — Hesperostipa spartea</p>

          <p>Streptopus roseus — Streptopus lanceolatus</p>

          <p>Symphyotrichum drummondii — add</p>

          <p>Symphyotrichum firmum — add (split from Aster puniceus)</p>

          <p>Syringa ×henryi — add</p>

          <p>Syringa reticulata — add</p>

          <p>Tanacetum huronense — Tanacetum bipinnatum</p>

          <p>Taraxacum palustre — add</p>

          <p>Taxodium distichum — add</p>

          <p>Taxus cuspidata — add</p>

          <p>Teesdalia nudicaulis — add</p>

          <p>Thalictrum pubescens — add</p>

          <p>Thaspium barbinode — Thaspium chapmanii</p>

          <p>Thymus pannonicus — Thymus albidus</p>

          <p>Tofieldia glutinosa — Triantha glutinosa</p>

          <p>Tomanthera auriculata — Agalinis auriculata</p>

          <p>Toxicodendron rydbergii — add (split from T. radicans)</p>

          <p>Trillium cuneatum — add (split from Trillium viride)<br>
            <br>
            Trillium luteum — add (split from Trillium viride)<br>
            <br>
            Trillium viride — delete (split into T. cuneatum &amp; T. luteum)</p>

          <p>Trisetum melicoides — Graphephorum melicoides</p>

          <p>Ulmus glabra — add</p>

          <p>Uniola latifolia — Chasmanthium latifolium</p>

          <p>Verbena canadensis — Glandularia canadensis</p>

          <p>Veronica hederifolia — add</p>

          <p>Viburnum trilobum — add (split from V. opulus)</p>

          <p>Vicia lathyroides — add</p>

          <p>Vigna unguiculata — add</p>

          <p>Vinca major — add</p>

          <p>Viola conspersa — Viola labradorica</p>

          <p>Viola novae-angliae — add</p>

          <p>Viola primulifolia — add</p>

          <p>Vulpia myuros — add</p>

          <p>Waldsteinia fragarioides — Geum fragarioides</p>

          <p>Wolffia brasiliensis — add</p>

          <p>Wolffia punctata — Wolffia borealis</p>

          <p>Yucca flaccida — add (split from Y. filamentosa)</p>

          <p>Zigadenus glaucus — Anticlea elegans</p>

          <p>Zizania palustris — add (split from Z. aquatica)</p>
        </v-col>
        <NavDrawer />
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'FloraChanges',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
  },
};
</script>

<style scoped>

</style>
