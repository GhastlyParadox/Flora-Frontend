<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="3" class="mr-12">
        <v-form class="editForm" v-if="!isSubmitted" enctype="multipart/form-data">
          <p class="headline font-weight-regular mb-5">Image Edit</p>
          <v-combobox
            v-model="editFormData.photographer"
            :items="[editFormData.photographer]"
            label="Photographer"
            append-icon=""
            outlined
            filled
            hide-no-data
            dense
          ></v-combobox>
          <v-combobox
            v-model="editFormData.caption"
            :items="[editFormData.caption]"
            label="Caption"
            append-icon=""
            outlined
            filled
            hide-no-data
            dense
          ></v-combobox>
          <v-checkbox
            v-model="editFormData.priority"
            label="Priority"
            true-value=editFormData.priority
          ></v-checkbox>
          <v-overlay :value="loaderOverlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <v-alert dense text type="success" v-if="success" dismissible>
            Saved!
          </v-alert>
          <v-alert dense text type="error" v-if="error" dismissible>
            Error: {{ this.errorMsg }}
          </v-alert>
          <v-btn v-on:click="sendEdit"
                 :loading="requestSent"
                 :disabled="requestSent"
                 color="primary"
                 class="mt-4 ma-1"
                 @click="loader = 'loading'">Submit</v-btn>
          <v-btn class="mt-4 ma-1"
                 @click="editFormReset()">Restore</v-btn>
          <v-dialog
            v-model="deleteDialog"
            persistent
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mt-4 ma-1"
                     color="red accent-1"
                     @click="deleteDialog = true">Delete</v-btn>
            </template>
            <v-card dark color="primary">
              <v-card-title class="headline">
                Delete this image?
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red accent-1"
                  x-large
                  text
                  @click="deleteDialog = false"
                >
                  No
                </v-btn>
                <v-btn
                  color="green accent-1"
                  text
                  x-large
                  @click="deleteImage"
                >
                  Yes
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </v-col>
      <v-col cols="3">
        <v-card max-width="400">
          <v-img v-if="selectedImageObj.thumb"
                 :src="selectedImageObj.thumb"
                 class="elevation-6"
                 contain
                 alt=""
          />
          <v-img v-else
                 :src="require('@/assets/images/placeholder_hover.jpg')"
                 class="elevation-6"
                 aspect-ratio="1"
                 height="400"
                 alt=""
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'ImageEdit',
  props: {
    loading: Boolean,
  },
  data() {
    return {
      editFormData: null,
      priority: null,
      isSubmitted: false,
      requestSent: false,
      loader: null,
      loaderOverlay: false,
      error: false,
      errorMsg: '',
      success: null,
      deleteDialog: false,
      confirmDelete: false,
      // selected: this.selectedImage.get(),
    };
  },
  created() {
    this.editFormData = _.cloneDeep(this.selectedImageObj);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    sendEdit(event, data) {
      const that = this;
      const imgObj = new FormData();
      imgObj.append('image_id', that.editFormData.image_id);
      imgObj.append('photographer', that.editFormData.photographer);
      imgObj.append('caption', that.editFormData.caption);
      imgObj.append('priority', that.editFormData.priority);
      that.loaderOverlay = true;
      that.requestSent = true;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8',
        },
        method: 'put',
      };
      axios.put(`/admin/fm/species-images/edit-image/${that.id}?path=${that.path}`, imgObj, config).then((response) => {
        console.log(response.config.data);
        that.requestSent = false;
        that.loaderOverlay = false;
        that.success = true;
        window.location.reload();
        console.log('Edited successfully');
      }).catch((error) => {
        that.loaderOverlay = false;
        that.requestSent = false;
        that.errorMsg = error;
        console.error(error);
      });
    },
    // eslint-disable-next-line no-unused-vars
    deleteImage(event, data) {
      const that = this;
      that.deleteDialog = false;
      that.loaderOverlay = true;
      axios.delete(`/admin/fm/species-images/delete-image/${that.id}?path=${that.path}`, {
        data: {
          image_id: that.editFormData.image_id,
        },
      }).catch((error) => {
        that.errorMsg = error;
        console.error(error);
      });
      that.loaderOverlay = false;
      this.$router.go();
    },
    editFormReset() {
      this.isSubmitted = false;
      const that = this;
      that.editformData = Object.assign(that.editFormData, getInitialData(that.selectedImageObj));
    },
    ...mapActions({
      setSelectedImageObj: 'speciesImages/setSelectedImageObj',
    }),
  },
  computed: {
    ...mapGetters('speciesImages', [
      'id',
      'path',
      'selectedImageObj',
    ]),
  },
  watch: {
    selectedImageObj(newObj, oldObj) {
      console.log(`value changed from ${oldObj} to ${newObj}`);
      this.editFormData = _.cloneDeep(newObj);
    },
  },
};
function getInitialData(obj) {
  return {
    photographer: obj.photographer,
    caption: obj.caption,
    priority: obj.priority,
  };
}
</script>

<style scoped>
.editForm{
  max-width: max-content;
}

</style>
