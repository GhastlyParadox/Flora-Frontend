<template>
  <v-container>
    <v-main>
      <v-row justify-sm="center" class="anchors" :class="{'ml-1': $vuetify.breakpoint.smAndDown}">
          <a class="title ma-1 button" href="#browse-GA">A</a>

          <a class="title ma-1 button" href="#browse-GB">B</a>

          <a class="title ma-1 button" href="#browse-GC">C</a>

          <a class="title ma-1 button" href="#browse-GD">D</a>

          <a class="title ma-1 button" href="#browse-GE">E</a>

          <a class="title ma-1 button" href="#browse-GF">F</a>

          <a class="title ma-1 button" href="#browse-GG">G</a>

          <a class="title ma-1 button" href="#browse-GH">H</a>

          <a class="title ma-1 button" href="#browse-GI">I</a>

          <a class="title ma-1 button" href="#browse-GJ">J</a>

          <a class="title ma-1 button" href="#browse-GK">K</a>

          <a class="title ma-1 button" href="#browse-GL">L</a>

          <a class="title ma-1 button" href="#browse-GM">M</a>

          <a class="title ma-1 button" href="#browse-GN">N</a>

          <a class="title ma-1 button" href="#browse-GO">O</a>

          <a class="title ma-1 button" href="#browse-GP">P</a>

          <a class="title ma-1 button" href="#browse-GQ">Q</a>

          <a class="title ma-1 button" href="#browse-GR">R</a>

          <a class="title ma-1 button" href="#browse-GS">S</a>

          <a class="title ma-1 button" href="#browse-GT">T</a>

          <a class="title ma-1 button" href="#browse-GU">U</a>

          <a class="title ma-1 button" href="#browse-GV">V</a>

          <a class="title ma-1 button" href="#browse-GW">W</a>

          <a class="title ma-1 button" href="#browse-GX">X</a>

          <a class="title ma-1 button" href="#browse-GY">Y</a>

          <a class="title ma-1 button" href="#browse-GZ">Z</a>
      </v-row>
      <v-row justify-sm="center" class="fill-width">
        <v-col cols="11" lg="8" offset-lg="2" md="10" offset="1" class="text-justify text-center mt-5">
          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">A</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GA"></span>
          <v-row class="browse-links mb-4 justify-start">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Abelmoschus'}}">Abelmoschus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Abies'}}">Abies</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Abutilon'}}">Abutilon</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Acalypha'}}">Acalypha</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Acer'}}">Acer</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Achillea'}}">Achillea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aconitum'}}">Aconitum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Acorus'}}">Acorus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Actaea'}}">Actaea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Adenocaulon'}}">Adenocaulon</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Adiantum'}}">Adiantum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Adlumia'}}">Adlumia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aegilops'}}">Aegilops</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aegopodium'}}">Aegopodium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aesculus'}}">Aesculus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aethusa'}}">Aethusa</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agalinis'}}">Agalinis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agastache'}}">Agastache</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ageratina'}}">Ageratina</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agoseris'}}">Agoseris</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agrimonia'}}">Agrimonia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agropyron'}}">Agropyron</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agrostemma'}}">Agrostemma</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Agrostis'}}">Agrostis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ailanthus'}}">Ailanthus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aira'}}">Aira</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ajuga'}}">Ajuga</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Akebia'}}">Akebia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alcea'}}">Alcea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alchemilla'}}">Alchemilla</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aletris'}}">Aletris</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alisma'}}">Alisma</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alliaria'}}">Alliaria</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Allium'}}">Allium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alnus'}}">Alnus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alopecurus'}}">Alopecurus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Althaea'}}">Althaea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Alyssum'}}">Alyssum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Amaranthus'}}">Amaranthus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ambrosia'}}">Ambrosia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Amelanchier'}}">Amelanchier</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Amerorchis'}}">Amerorchis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ammannia'}}">Ammannia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ammophila'}}">Ammophila</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Amorpha'}}">Amorpha</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ampelamus'}}">Ampelamus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ampelopsis'}}">Ampelopsis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Amphicarpaea'}}">Amphicarpaea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anagallis'}}">Anagallis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anaphalis'}}">Anaphalis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anchusa'}}">Anchusa</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Andromeda'}}">Andromeda</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Andropogon'}}">Andropogon</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Androsace'}}">Androsace</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anemone'}}">Anemone</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anethum'}}">Anethum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Angelica'}}">Angelica</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Antennaria'}}">Antennaria</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anthemis'}}">Anthemis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anthoxanthum'}}">Anthoxanthum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anthriscus'}}">Anthriscus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anthyllis'}}">Anthyllis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Anticlea'}}">Anticlea</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Antirrhinum'}}">Antirrhinum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Apera'}}">Apera</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Apios'}}">Apios</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aplectrum'}}">Aplectrum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Apocynum'}}">Apocynum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aquilegia'}}">Aquilegia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arabidopsis'}}">Arabidopsis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arabis'}}">Arabis</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aralia'}}">Aralia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arceuthobium'}}">Arceuthobium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arctium'}}">Arctium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arctostaphylos'}}">Arctostaphylos</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arenaria'}}">Arenaria</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arethusa'}}">Arethusa</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Argemone'}}">Argemone</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arisaema'}}">Arisaema</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aristida'}}">Aristida</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aristolochia'}}">Aristolochia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Armoracia'}}">Armoracia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arnica'}}">Arnica</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arnoglossum'}}">Arnoglossum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arnoseris'}}">Arnoseris</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aronia'}}">Aronia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Arrhenatherum'}}">Arrhenatherum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Artemisia'}}">Artemisia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aruncus'}}">Aruncus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Asarum'}}">Asarum</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Asclepias'}}">Asclepias</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Asimina'}}">Asimina</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Asparagus'}}">Asparagus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Asplenium'}}">Asplenium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aster'}}">Aster</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Astragalus'}}">Astragalus</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Athyrium'}}">Athyrium</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Atocion'}}">Atocion</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Atriplex'}}">Atriplex</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Atropa'}}">Atropa</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aureolaria'}}">Aureolaria</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Aurinia'}}">Aurinia</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Avena'}}">Avena</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Avenella'}}">Avenella</router-link>

            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Azolla'}}">Azolla</router-link>
          </v-row>

          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">B</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GB"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Baptisia'}}">Baptisia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Barbarea'}}">Barbarea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bartonia'}}">Bartonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bassia'}}">Bassia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Beckmannia'}}">Beckmannia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bellis'}}">Bellis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Berberis'}}">Berberis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Berteroa'}}">Berteroa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Berula'}}">Berula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Besseya'}}">Besseya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Beta'}}">Beta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Betula'}}">Betula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bidens'}}">Bidens</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bistorta'}}">Bistorta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Blephilia'}}">Blephilia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Boechera'}}">Boechera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Boehmeria'}}">Boehmeria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bolboschoenus'}}">Bolboschoenus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Boltonia'}}">Boltonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Borago'}}">Borago</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bothriochloa'}}">Bothriochloa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Botrychium'}}">Botrychium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Botrypus'}}">Botrypus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bouteloua'}}">Bouteloua</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Brachyelytrum'}}">Brachyelytrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Brachypodium'}}">Brachypodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Brasenia'}}">Brasenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Brassica'}}">Brassica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Braya'}}">Braya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Brickellia'}}">Brickellia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Briza'}}">Briza</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bromus'}}">Bromus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Buchnera'}}">Buchnera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Buddleja'}}">Buddleja</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Buglossoides'}}">Buglossoides
            </router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bulbostylis'}}">Bulbostylis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bunias'}}">Bunias</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Bupleurum'}}">Bupleurum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Butomus'}}">Butomus</router-link>

          </v-row>

          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">C</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GC"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cabomba'}}">Cabomba</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cakile'}}">Cakile</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calamagrostis'}}">Calamagrostis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calamovilfa'}}">Calamovilfa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calendula'}}">Calendula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calla'}}">Calla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Callirhoe'}}">Callirhoe</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Callistephus'}}">Callistephus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Callitriche'}}">Callitriche</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calluna'}}">Calluna</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calopogon'}}">Calopogon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Caltha'}}">Caltha</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calypso'}}">Calypso</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Calystegia'}}">Calystegia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Camassia'}}">Camassia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Camelina'}}">Camelina</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Campanula'}}">Campanula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Campanulastrum'}}">Campanulastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Campsis'}}">Campsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Canadanthus'}}">Canadanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cannabis'}}">Cannabis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Capnoides'}}">Capnoides</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Capsella'}}">Capsella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Caragana'}}">Caragana</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cardamine'}}">Cardamine</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cardiospermum'}}">Cardiospermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carduus'}}">Carduus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carex'}}">Carex</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carpinus'}}">Carpinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carthamus'}}">Carthamus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carum'}}">Carum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Carya'}}">Carya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Castanea'}}">Castanea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Castilleja'}}">Castilleja</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Catalpa'}}">Catalpa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Caulophyllum'}}">Caulophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ceanothus'}}">Ceanothus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Celastrus'}}">Celastrus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Celtis'}}">Celtis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cenchrus'}}">Cenchrus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Centaurea'}}">Centaurea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Centaurium'}}">Centaurium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cephalanthus'}}">Cephalanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cerastium'}}">Cerastium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ceratophyllum'}}">Ceratophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cercis'}}">Cercis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chaenomeles'}}">Chaenomeles</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chaenorhinum'}}">Chaenorhinum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chaerophyllum'}}">Chaerophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chaiturus'}}">Chaiturus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chamaecrista'}}">Chamaecrista</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chamaedaphne'}}">Chamaedaphne</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chamaelirium'}}">Chamaelirium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chamaenerion'}}">Chamaenerion</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chamaerhodos'}}">Chamaerhodos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chasmanthium'}}">Chasmanthium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chelidonium'}}">Chelidonium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chelone'}}">Chelone</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chenopodium'}}">Chenopodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chimaphila'}}">Chimaphila</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chloris'}}">Chloris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chondrilla'}}">Chondrilla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chorispora'}}">Chorispora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Chrysosplenium'}}">Chrysosplenium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cichorium'}}">Cichorium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cicuta'}}">Cicuta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cinna'}}">Cinna</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Circaea'}}">Circaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cirsium'}}">Cirsium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Citrullus'}}">Citrullus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cladium'}}">Cladium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Claytonia'}}">Claytonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Clematis'}}">Clematis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Clinopodium'}}">Clinopodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Clintonia'}}">Clintonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coeloglossum'}}">Coeloglossum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coelorachis'}}">Coelorachis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coincya'}}">Coincya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Colchicum'}}">Colchicum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coleataenia'}}">Coleataenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Collinsia'}}">Collinsia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Collinsonia'}}">Collinsonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Collomia'}}">Collomia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Comandra'}}">Comandra</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Comarum'}}">Comarum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Commelina'}}">Commelina</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Comptonia'}}">Comptonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conioselinum'}}">Conioselinum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conium'}}">Conium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conoclinium'}}">Conoclinium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conopholis'}}">Conopholis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conringia'}}">Conringia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Consolida'}}">Consolida</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Convallaria'}}">Convallaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Convolvulus'}}">Convolvulus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Conyza'}}">Conyza</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coptidium'}}">Coptidium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coptis'}}">Coptis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Corallorhiza'}}">Corallorhiza</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coreopsis'}}">Coreopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Coriandrum'}}">Coriandrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Corispermum'}}">Corispermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cornus'}}">Cornus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Corydalis'}}">Corydalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Corylus'}}">Corylus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Corynephorus'}}">Corynephorus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cosmos'}}">Cosmos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cota'}}">Cota</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cotinus'}}">Cotinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cotoneaster'}}">Cotoneaster</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crataegus'}}">Crataegus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crepis'}}">Crepis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crocanthemum'}}">Crocanthemum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crocosmia'}}">Crocosmia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crotalaria'}}">Crotalaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Croton'}}">Croton</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Crypsis'}}">Crypsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cryptogramma'}}">Cryptogramma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cryptotaenia'}}">Cryptotaenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cucumis'}}">Cucumis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cucurbita'}}">Cucurbita</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cuscuta'}}">Cuscuta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cyclachaena'}}">Cyclachaena</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cycloloma'}}">Cycloloma
            </router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cymbalaria'}}">Cymbalaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cynodon'}}">Cynodon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cynoglossum'}}">Cynoglossum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cynosurus'}}">Cynosurus
            </router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cyperus'}}">Cyperus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cypripedium'}}">Cypripedium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cystopteris'}}">Cystopteris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Cytisus'}}">Cytisus</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">D</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GD"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dactylis'}}">Dactylis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dalea'}}">Dalea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dalibarda'}}">Dalibarda</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Danthonia'}}">Danthonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Daphne'}}">Daphne</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dasiphora'}}">Dasiphora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dasistoma'}}">Dasistoma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Datura'}}">Datura</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Daucus'}}">Daucus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Decodon'}}">Decodon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Delphinium'}}">Delphinium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dendrolycopodium'}}">Dendrolycopodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dennstaedtia'}}">Dennstaedtia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Deparia'}}">Deparia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Deschampsia'}}">Deschampsia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Descurainia'}}">Descurainia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Desmanthus'}}">Desmanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Desmodium'}}">Desmodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Deutzia'}}">Deutzia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dianthus'}}">Dianthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diarrhena'}}">Diarrhena</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dicentra'}}">Dicentra</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dichanthelium'}}">Dichanthelium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dictamnus'}}">Dictamnus
            </router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diervilla'}}">Diervilla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Digitalis'}}">Digitalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Digitaria'}}">Digitaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diodia'}}">Diodia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dioscorea'}}">Dioscorea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diphasiastrum'}}">Diphasiastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diplachne'}}">Diplachne</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Diplotaxis'}}">Diplotaxis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dipsacus'}}">Dipsacus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dirca'}}">Dirca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Doellingeria'}}">Doellingeria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Draba'}}">Draba</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dracocephalum'}}">Dracocephalum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Drosera'}}">Drosera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Drymocallis'}}">Drymocallis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dryopteris'}}">Dryopteris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dulichium'}}">Dulichium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dysphania'}}">Dysphania</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Dyssodia'}}">Dyssodia</router-link>

          </v-row>

          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">E</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GE"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echinacea'}}">Echinacea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echinochloa'}}">Echinochloa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echinocystis'}}">Echinocystis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echinodorus'}}">Echinodorus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echinops'}}">Echinops</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Echium'}}">Echium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eclipta'}}">Eclipta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eichhornia'}}">Eichhornia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Elaeagnus'}}">Elaeagnus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Elatine'}}">Elatine</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eleocharis'}}">Eleocharis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eleusine'}}">Eleusine</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eleutherococcus'}}">Eleutherococcus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ellisia'}}">Ellisia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Elodea'}}">Elodea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Elsholtzia'}}">Elsholtzia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Elymus'}}">Elymus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Empetrum'}}">Empetrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Endodeca'}}">Endodeca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Enemion'}}">Enemion</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Epifagus'}}">Epifagus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Epigaea'}}">Epigaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Epilobium'}}">Epilobium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Epipactis'}}">Epipactis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Equisetum'}}">Equisetum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eragrostis'}}">Eragrostis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eranthis'}}">Eranthis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erechtites'}}">Erechtites</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erigenia'}}">Erigenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erigeron'}}">Erigeron</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eriocaulon'}}">Eriocaulon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eriochloa'}}">Eriochloa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eriophorum'}}">Eriophorum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erodium'}}">Erodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eruca'}}">Eruca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erucastrum'}}">Erucastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eryngium'}}">Eryngium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erysimum'}}">Erysimum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Erythronium'}}">Erythronium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eschscholzia'}}">Eschscholzia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Euonymus'}}">Euonymus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eupatorium'}}">Eupatorium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Euphorbia'}}">Euphorbia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Euphrasia'}}">Euphrasia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eurybia'}}">Eurybia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Euthamia'}}">Euthamia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Eutrochium'}}">Eutrochium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Exochorda'}}">Exochorda</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">F</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GF"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fagopyrum'}}">Fagopyrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fagus'}}">Fagus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fallopia'}}">Fallopia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fatoua'}}">Fatoua</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Festuca'}}">Festuca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ficaria'}}">Ficaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ficus'}}">Ficus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Filipendula'}}">Filipendula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fimbristylis'}}">Fimbristylis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Floerkea'}}">Floerkea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Foeniculum'}}">Foeniculum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Forsythia'}}">Forsythia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fragaria'}}">Fragaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Frangula'}}">Frangula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Frasera'}}">Frasera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fraxinus'}}">Fraxinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Froelichia'}}">Froelichia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fuirena'}}">Fuirena</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Fumaria'}}">Fumaria</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">G</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GG"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gaillardia'}}">Gaillardia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galanthus'}}">Galanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galearis'}}">Galearis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galega'}}">Galega</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galeopsis'}}">Galeopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galinsoga'}}">Galinsoga</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Galium'}}">Galium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gamochaeta'}}">Gamochaeta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gaultheria'}}">Gaultheria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gaylussacia'}}">Gaylussacia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gentiana'}}">Gentiana</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gentianella'}}">Gentianella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gentianopsis'}}">Gentianopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Geocaulon'}}">Geocaulon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Geranium'}}">Geranium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Geum'}}">Geum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gillenia'}}">Gillenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Glandularia'}}">Glandularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Glaucium'}}">Glaucium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Glechoma'}}">Glechoma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gleditsia'}}">Gleditsia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Glyceria'}}">Glyceria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Glycine'}}">Glycine</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gnaphalium'}}">Gnaphalium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Goodyera'}}">Goodyera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Graphephorum'}}">Graphephorum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gratiola'}}">Gratiola</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Grindelia'}}">Grindelia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Guizotia'}}">Guizotia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gymnocarpium'}}">Gymnocarpium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gymnocladus'}}">Gymnocladus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Gypsophila'}}">Gypsophila</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">H</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GH"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hackelia'}}">Hackelia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Halenia'}}">Halenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Halerpestes'}}">Halerpestes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Halesia'}}">Halesia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hamamelis'}}">Hamamelis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hedeoma'}}">Hedeoma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hedera'}}">Hedera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hedysarum'}}">Hedysarum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Helenium'}}">Helenium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Helianthus'}}">Helianthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Heliopsis'}}">Heliopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Helleborus'}}">Helleborus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hemerocallis'}}">Hemerocallis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hepatica'}}">Hepatica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Heracleum'}}">Heracleum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Herniaria'}}">Herniaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hesperis'}}">Hesperis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hesperostipa'}}">Hesperostipa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Heteranthera'}}">Heteranthera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Heterotheca'}}">Heterotheca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Heuchera'}}">Heuchera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hibiscus'}}">Hibiscus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hieracium'}}">Hieracium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hippuris'}}">Hippuris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Holcus'}}">Holcus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Holosteum'}}">Holosteum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Homalosorus'}}">Homalosorus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hordeum'}}">Hordeum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hosta'}}">Hosta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Houstonia'}}">Houstonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hudsonia'}}">Hudsonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Humulus'}}">Humulus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Huperzia'}}">Huperzia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hybanthus'}}">Hybanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hydrastis'}}">Hydrastis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hydrocharis'}}">Hydrocharis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hydrocotyle'}}">Hydrocotyle</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hydrophyllum'}}">Hydrophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hylodesmum'}}">Hylodesmum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hylotelephium'}}">Hylotelephium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hyoscyamus'}}">Hyoscyamus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hypericum'}}">Hypericum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hypochaeris'}}">Hypochaeris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hypopitys'}}">Hypopitys</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hypoxis'}}">Hypoxis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Hyssopus'}}">Hyssopus</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">I</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GI"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Iberis'}}">Iberis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ilex'}}">Ilex</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Impatiens'}}">Impatiens</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Inula'}}">Inula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ipomoea'}}">Ipomoea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ipomopsis'}}">Ipomopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Iris'}}">Iris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Isoetes'}}">Isoetes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Isotrema'}}">Isotrema</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Isotria'}}">Isotria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Iva'}}">Iva</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">J</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GJ"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Jacobaea'}}">Jacobaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Jasione'}}">Jasione</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Jeffersonia'}}">Jeffersonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Juglans'}}">Juglans</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Juncus'}}">Juncus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Juniperus'}}">Juniperus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Justicia'}}">Justicia</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">K</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GK"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kalmia'}}">Kalmia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kalopanax'}}">Kalopanax</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kerria'}}">Kerria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kickxia'}}">Kickxia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Knautia'}}">Knautia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Koeleria'}}">Koeleria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kolkwitzia'}}">Kolkwitzia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Krigia'}}">Krigia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Kummerowia'}}">Kummerowia</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">L</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GL"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lactuca'}}">Lactuca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lamiastrum'}}">Lamiastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lamium'}}">Lamium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lamprocapnos'}}">Lamprocapnos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Laportea'}}">Laportea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lappula'}}">Lappula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lapsana'}}">Lapsana</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Larix'}}">Larix</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lathyrus'}}">Lathyrus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lechea'}}">Lechea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leersia'}}">Leersia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lemna'}}">Lemna</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leontodon'}}">Leontodon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leonurus'}}">Leonurus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lepidium'}}">Lepidium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lespedeza'}}">Lespedeza</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leucanthemella'}}">Leucanthemella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leucanthemum'}}">Leucanthemum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leucophysalis'}}">Leucophysalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leucospora'}}">Leucospora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Levisticum'}}">Levisticum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Leymus'}}">Leymus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Liatris'}}">Liatris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ligustrum'}}">Ligustrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lilium'}}">Lilium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Limonium'}}">Limonium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Linaria'}}">Linaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lindera'}}">Lindera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lindernia'}}">Lindernia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Linnaea'}}">Linnaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Linum'}}">Linum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Liparis'}}">Liparis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lipocarpha'}}">Lipocarpha</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Liquidambar'}}">Liquidambar</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Liriodendron'}}">Liriodendron</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lithospermum'}}">Lithospermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Littorella'}}">Littorella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lobelia'}}">Lobelia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lobularia'}}">Lobularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Logfia'}}">Logfia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lolium'}}">Lolium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lonicera'}}">Lonicera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lotus'}}">Lotus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ludwigia'}}">Ludwigia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lunaria'}}">Lunaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lupinus'}}">Lupinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Luzula'}}">Luzula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lycium'}}">Lycium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lycopodiella'}}">Lycopodiella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lycopodium'}}">Lycopodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lycopus'}}">Lycopus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lygodium'}}">Lygodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lysimachia'}}">Lysimachia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Lythrum'}}">Lythrum</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">M</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GM"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Macleaya'}}">Macleaya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Maclura'}}">Maclura</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Madia'}}">Madia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Magnolia'}}">Magnolia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Maianthemum'}}">Maianthemum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Malaxis'}}">Malaxis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Malus'}}">Malus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Malva'}}">Malva</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Marrubium'}}">Marrubium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Marsilea'}}">Marsilea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Matricaria'}}">Matricaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Matteuccia'}}">Matteuccia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mazus'}}">Mazus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Medeola'}}">Medeola</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Medicago'}}">Medicago</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Melampyrum'}}">Melampyrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Melica'}}">Melica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Melilotus'}}">Melilotus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Melissa'}}">Melissa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Menispermum'}}">Menispermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mentha'}}">Mentha</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Menyanthes'}}">Menyanthes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mertensia'}}">Mertensia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Micranthes'}}">Micranthes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Microstegium'}}">Microstegium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Microthlaspi'}}">Microthlaspi</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mikania'}}">Mikania</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Milium'}}">Milium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mimosa'}}">Mimosa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mimulus'}}">Mimulus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Minuartia'}}">Minuartia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mirabilis'}}">Mirabilis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Miscanthus'}}">Miscanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Misopates'}}">Misopates</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mitchella'}}">Mitchella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mitella'}}">Mitella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Moehringia'}}">Moehringia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Molinia'}}">Molinia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mollugo'}}">Mollugo</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Monarda'}}">Monarda</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Moneses'}}">Moneses</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Monotropa'}}">Monotropa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Morus'}}">Morus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Muhlenbergia'}}">Muhlenbergia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mulgedium'}}">Mulgedium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Muscari'}}">Muscari</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Mycelis'}}">Mycelis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myosotis'}}">Myosotis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myosoton'}}">Myosoton</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myosurus'}}">Myosurus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myrica'}}">Myrica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myriophyllum'}}">Myriophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Myrrhis'}}">Myrrhis</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">N</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GN"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Najas'}}">Najas</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Napaea'}}">Napaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Narcissus'}}">Narcissus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nardus'}}">Nardus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nasturtium'}}">Nasturtium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nelumbo'}}">Nelumbo</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Neottia'}}">Neottia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nepeta'}}">Nepeta</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Neslia'}}">Neslia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nicandra'}}">Nicandra</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nicotiana'}}">Nicotiana</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nigella'}}">Nigella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nuphar'}}">Nuphar</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nuttallanthus'}}">Nuttallanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nymphaea'}}">Nymphaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nymphoides'}}">Nymphoides</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Nyssa'}}">Nyssa</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">O</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GO"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oclemena'}}">Oclemena</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Odontites'}}">Odontites</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oenothera'}}">Oenothera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Omalotheca'}}">Omalotheca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Onoclea'}}">Onoclea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Onopordum'}}">Onopordum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ophioglossum'}}">Ophioglossum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oplopanax'}}">Oplopanax</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Opuntia'}}">Opuntia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Orbexilum'}}">Orbexilum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Origanum'}}">Origanum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ornithogalum'}}">Ornithogalum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Orobanche'}}">Orobanche</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Orthilia'}}">Orthilia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oryzopsis'}}">Oryzopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Osmorhiza'}}">Osmorhiza</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Osmunda'}}">Osmunda</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Osmundastrum'}}">Osmundastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ostrya'}}">Ostrya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oxalis'}}">Oxalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Oxypolis'}}">Oxypolis</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">P</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GP"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pachysandra'}}">Pachysandra</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Packera'}}">Packera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Panax'}}">Panax</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Panicum'}}">Panicum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Papaver'}}">Papaver</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Parietaria'}}">Parietaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Parnassia'}}">Parnassia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Paronychia'}}">Paronychia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Parthenium'}}">Parthenium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Parthenocissus'}}">Parthenocissus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pascopyrum'}}">Pascopyrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Paspalum'}}">Paspalum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pastinaca'}}">Pastinaca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Patis'}}">Patis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pedicularis'}}">Pedicularis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pellaea'}}">Pellaea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Peltandra'}}">Peltandra</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Penstemon'}}">Penstemon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Penthorum'}}">Penthorum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Perilla'}}">Perilla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Peritoma'}}">Peritoma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Persicaria'}}">Persicaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Petasites'}}">Petasites</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Petrorhagia'}}">Petrorhagia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Petroselinum'}}">Petroselinum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Petunia'}}">Petunia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phacelia'}}">Phacelia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phalaris'}}">Phalaris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phaseolus'}}">Phaseolus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phedimus'}}">Phedimus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phegopteris'}}">Phegopteris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phellodendron'}}">Phellodendron</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Philadelphus'}}">Philadelphus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phleum'}}">Phleum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phlox'}}">Phlox</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phragmites'}}">Phragmites</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phryma'}}">Phryma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phyla'}}">Phyla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phyllostachys'}}">Phyllostachys</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Physalis'}}">Physalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Physocarpus'}}">Physocarpus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Physostegia'}}">Physostegia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Phytolacca'}}">Phytolacca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Picea'}}">Picea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Picris'}}">Picris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pilea'}}">Pilea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pimpinella'}}">Pimpinella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pinguicula'}}">Pinguicula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pinus'}}">Pinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Piptatheropsis'}}">Piptatheropsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Piptochaetium'}}">Piptochaetium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pistia'}}">Pistia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pisum'}}">Pisum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Plagiobothrys'}}">Plagiobothrys</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Plantago'}}">Plantago</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Platanthera'}}">Platanthera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Platanus'}}">Platanus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pluchea'}}">Pluchea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Poa'}}">Poa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Podophyllum'}}">Podophyllum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pogonia'}}">Pogonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polanisia'}}">Polanisia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polemonium'}}">Polemonium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polygala'}}">Polygala</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polygonatum'}}">Polygonatum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polygonum'}}">Polygonum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polymnia'}}">Polymnia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polypodium'}}">Polypodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polypogon'}}">Polypogon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polystichum'}}">Polystichum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Polytaenia'}}">Polytaenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pontederia'}}">Pontederia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Populus'}}">Populus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Portulaca'}}">Portulaca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Potamogeton'}}">Potamogeton</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Potentilla'}}">Potentilla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Poterium'}}">Poterium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Prenanthes'}}">Prenanthes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Primula'}}">Primula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Proboscidea'}}">Proboscidea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Prosartes'}}">Prosartes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Proserpinaca'}}">Proserpinaca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Prunella'}}">Prunella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Prunus'}}">Prunus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pseudognaphalium'}}">Pseudognaphalium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pseudoroegneria'}}">Pseudoroegneria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pseudotsuga'}}">Pseudotsuga</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ptelea'}}">Ptelea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pteridium'}}">Pteridium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pterospora'}}">Pterospora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Puccinellia'}}">Puccinellia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pueraria'}}">Pueraria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pycnanthemum'}}">Pycnanthemum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pyrola'}}">Pyrola</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Pyrus'}}">Pyrus</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">Q</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GQ"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Quercus'}}">Quercus</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">R</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GR"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ranunculus'}}">Ranunculus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Raphanus'}}">Raphanus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ratibida'}}">Ratibida</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Reseda'}}">Reseda</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhamnus'}}">Rhamnus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhaponticum'}}">Rhaponticum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rheum'}}">Rheum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhexia'}}">Rhexia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhinanthus'}}">Rhinanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhododendron'}}">Rhododendron</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhodotypos'}}">Rhodotypos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhus'}}">Rhus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rhynchospora'}}">Rhynchospora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ribes'}}">Ribes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ricinus'}}">Ricinus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Robinia'}}">Robinia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rorippa'}}">Rorippa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rosa'}}">Rosa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rotala'}}">Rotala</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rubus'}}">Rubus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rudbeckia'}}">Rudbeckia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ruellia'}}">Ruellia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Rumex'}}">Rumex</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ruppia'}}">Ruppia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ruta'}}">Ruta</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">S</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GS"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sabatia'}}">Sabatia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sagina'}}">Sagina</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sagittaria'}}">Sagittaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Salicornia'}}">Salicornia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Salix'}}">Salix</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Salsola'}}">Salsola</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Salvia'}}">Salvia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sambucus'}}">Sambucus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Samolus'}}">Samolus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sanguinaria'}}">Sanguinaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sanguisorba'}}">Sanguisorba</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sanicula'}}">Sanicula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Saponaria'}}">Saponaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sarracenia'}}">Sarracenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sassafras'}}">Sassafras</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Satureja'}}">Satureja</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Saururus'}}">Saururus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Saxifraga'}}">Saxifraga</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sceptridium'}}">Sceptridium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scheuchzeria'}}">Scheuchzeria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Schizachne'}}">Schizachne
            </router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Schizachyrium'}}">Schizachyrium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Schkuhria'}}">Schkuhria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Schoenoplectiella'}}">Schoenoplectiella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Schoenoplectus'}}">Schoenoplectus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scilla'}}">Scilla</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scirpus'}}">Scirpus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scleranthus'}}">Scleranthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scleria'}}">Scleria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sclerochloa'}}">Sclerochloa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scorzoneroides'}}">Scorzoneroides</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scrophularia'}}">Scrophularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Scutellaria'}}">Scutellaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Secale'}}">Secale</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Securigera'}}">Securigera</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sedum'}}">Sedum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Selaginella'}}">Selaginella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Senecio'}}">Senecio</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Senna'}}">Senna</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sericocarpus'}}">Sericocarpus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Setaria'}}">Setaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Shepherdia'}}">Shepherdia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sherardia'}}">Sherardia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sibbaldiopsis'}}">Sibbaldiopsis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sicyos'}}">Sicyos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sida'}}">Sida</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Silene'}}">Silene</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Silphium'}}">Silphium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Silybum'}}">Silybum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sinapis'}}">Sinapis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sisymbrium'}}">Sisymbrium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sisyrinchium'}}">Sisyrinchium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sium'}}">Sium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Smallanthus'}}">Smallanthus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Smilax'}}">Smilax</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Solanum'}}">Solanum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Solidago'}}">Solidago</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sonchus'}}">Sonchus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sorbaria'}}">Sorbaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sorbus'}}">Sorbus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sorghastrum'}}">Sorghastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sorghum'}}">Sorghum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sparganium'}}">Sparganium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spartina'}}">Spartina</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spergula'}}">Spergula</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spergularia'}}">Spergularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sphenopholis'}}">Sphenopholis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spinulum'}}">Spinulum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spiraea'}}">Spiraea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spiranthes'}}">Spiranthes</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Spirodela'}}">Spirodela</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Sporobolus'}}">Sporobolus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stachys'}}">Stachys</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Staphylea'}}">Staphylea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stellaria'}}">Stellaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stenanthium'}}">Stenanthium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stenaria'}}">Stenaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Streptopus'}}">Streptopus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Strophostyles'}}">Strophostyles</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stuckenia'}}">Stuckenia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Stylophorum'}}">Stylophorum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Suaeda'}}">Suaeda</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Subularia'}}">Subularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Succisella'}}">Succisella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Symphoricarpos'}}">Symphoricarpos</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Symphyotrichum'}}">Symphyotrichum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Symphytum'}}">Symphytum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Symplocarpus'}}">Symplocarpus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Syringa'}}">Syringa</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">T</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GT"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Taenidia'}}">Taenidia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tamarix'}}">Tamarix</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tanacetum'}}">Tanacetum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Taraxacum'}}">Taraxacum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tarenaya'}}">Tarenaya</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Taxodium'}}">Taxodium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Taxus'}}">Taxus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Teesdalia'}}">Teesdalia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tephroseris'}}">Tephroseris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tephrosia'}}">Tephrosia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tetraneuris'}}">Tetraneuris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Teucrium'}}">Teucrium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thalictrum'}}">Thalictrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thaspium'}}">Thaspium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thelesperma'}}">Thelesperma</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thelypteris'}}">Thelypteris</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thladiantha'}}">Thladiantha</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thlaspi'}}">Thlaspi</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thuja'}}">Thuja</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Thymus'}}">Thymus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tiarella'}}">Tiarella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tilia'}}">Tilia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tipularia'}}">Tipularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tofieldia'}}">Tofieldia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Torilis'}}">Torilis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Torreyochloa'}}">Torreyochloa</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Toxicodendron'}}">Toxicodendron</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trachyspermum'}}">Trachyspermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tradescantia'}}">Tradescantia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tragopogon'}}">Tragopogon</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triadenum'}}">Triadenum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triantha'}}">Triantha</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tribulus'}}">Tribulus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trichophorum'}}">Trichophorum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trichostema'}}">Trichostema</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tridens'}}">Tridens</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trientalis'}}">Trientalis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trifolium'}}">Trifolium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triglochin'}}">Triglochin</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trillium'}}">Trillium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triodanis'}}">Triodanis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triosteum'}}">Triosteum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triphora'}}">Triphora</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tripidium'}}">Tripidium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triplasis'}}">Triplasis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tripleurospermum'}}">Tripleurospermum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tripsacum'}}">Tripsacum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Trisetum'}}">Trisetum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Triticum'}}">Triticum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tsuga'}}">Tsuga</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Turritis'}}">Turritis</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Tussilago'}}">Tussilago</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Typha'}}">Typha</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">U</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GU"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Ulmus'}}">Ulmus</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Urtica'}}">Urtica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Utricularia'}}">Utricularia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Uvularia'}}">Uvularia</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">V</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GV"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vaccaria'}}">Vaccaria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vaccinium'}}">Vaccinium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Valeriana'}}">Valeriana</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Valerianella'}}">Valerianella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vallisneria'}}">Vallisneria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Verbascum'}}">Verbascum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Verbena'}}">Verbena</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Verbesina'}}">Verbesina</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vernonia'}}">Vernonia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Veronica'}}">Veronica</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Veronicastrum'}}">Veronicastrum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Viburnum'}}">Viburnum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vicia'}}">Vicia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vigna'}}">Vigna</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vinca'}}">Vinca</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vincetoxicum'}}">Vincetoxicum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Viola'}}">Viola</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Vitis'}}">Vitis</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">W</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GW"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Wisteria'}}">Wisteria</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Wolffia'}}">Wolffia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Wolffiella'}}">Wolffiella</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Woodsia'}}">Woodsia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Woodwardia'}}">Woodwardia</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">X</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GX"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Xanthium'}}">Xanthium</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Xyris'}}">Xyris</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">Y</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GY"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Yucca'}}">Yucca</router-link>

          </v-row>
          <p>&nbsp;</p>

          <p :class="{'headline': $vuetify.breakpoint.lgAndUp, 'title': $vuetify.breakpoint.mdAndDown}">Z</p>
          <v-divider class="mb-3"></v-divider>
          <span class="anchor" id="browse-GZ"></span>
          <v-row class="browse-links mb-4">
            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Zannichellia'}}">Zannichellia</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Zanthoxylum'}}">Zanthoxylum</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Zea'}}">Zea</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Zizania'}}">Zizania</router-link>


            <router-link class="browse" :to="{ name: 'genus', params: {genus_name: 'Zizia'}}">Zizia</router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'BrowseGenus',
};
</script>

<style scoped>

  .browse {
    padding: 0.5em;
    display: inline-block;
    width: 10em;
  }
  .browse:hover{
    font-weight: bold;
  }
  .title:hover{
    font-weight: bold;
  }
  .anchors {
    display: flex;
    max-width: 100%;
  }
  .anchor {
    margin-top: -175px;
    padding-bottom: 175px;
    display: inline-block;
  }

</style>
