<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="3" class="mr-12">
        <v-form v-if="!isSubmitted" enctype="multipart/form-data">
          <!--
          <v-select :items="getImageData" label="Standard" cache-items>
            <template v-slot:item="{ item }">
              <img :src="item.thumb">
            </template>
          </v-select>
          -->
          <p class="headline font-weight-regular mb-5">Image Upload</p>
          <v-text-field v-model="uploadFormData.photographer"
                        label="Photographer">
          </v-text-field>
          <v-text-field v-model="uploadFormData.caption"
                        label="Caption">
          </v-text-field>
          <validation-provider rules="required" v-slot="{ errors }">
            <v-file-input label="Image file"
                          accept="image/*"
                          name="file"
                          data-vv-validate-on="blur"
                          id="file" ref="image"
                          v-model="uploadFormData.file">
            </v-file-input>
          </validation-provider>
          <v-checkbox v-model="uploadFormData.priority"
                      label="Priority"
                      clearable>
          </v-checkbox>
          <v-overlay :value="loaderOverlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <v-alert dense text type="success" v-if="success" dismissible>
            Saved!
          </v-alert>
          <v-alert dense text type="error" v-if="error" dismissible>
            Error: {{ this.errorMsg }}
          </v-alert>
          <v-btn v-on:click="sendUpload"
                 :loading="loading"
                 :disabled="loading"
                 color="primary"
                 class="mt-4 ma-1"
                 @click="loader = 'loading'">Upload</v-btn>
          <v-btn class="mt-4 ma-1"
                 @click="formReset()">Clear</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ImageUploader',
  props: {
    species_id: String,
    path: String,
  },
  data() {
    return {
      uploadFormData: getInitialData(),
      isSubmitted: false,
      loader: null,
      loading: false,
      loaderOverlay: false,
      error: false,
      errorMsg: '',
      success: null,
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    sendUpload(event, file) {
      const that = this;
      const imgObj = new FormData();
      imgObj.append('photographer', that.uploadFormData.photographer);
      imgObj.append('caption', that.uploadFormData.caption);
      imgObj.append('priority', that.uploadFormData.priority);
      imgObj.append('files', that.uploadFormData.file);
      imgObj.append('path', `${that.path}`);
      that.loaderOverlay = true;
      that.loading = true;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8',
        },
        method: 'post',
      };
      axios.post(`/admin/fm/species-images/upload/${that.species_id}?path=${that.path}`, imgObj, config).then((response) => {
        console.log(response.config.data);
        that.loading = false;
        that.loaderOverlay = false;
        that.success = true;
        window.location.reload();
        console.log('Saved successfully');
      }).catch((error) => {
        that.loaderOverlay = false;
        that.loading = false;
        that.errorMsg = error;
        console.error(error);
      });
    },
    formReset() {
      this.isSubmitted = false;
      // eslint-disable-next-line no-use-before-define
      Object.assign(this.uploadFormData, getInitialData());
      this.$refs.form.reset();
    },
  },
};

function getInitialData() {
  return {
    photographer: '',
    caption: '',
    priority: false,
    file: null,
  };
}
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .form{
    max-width: max-content;
  }
</style>
