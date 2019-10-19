<template>
  <v-layout row wrap mt-5 mb-4>
      <div class="row">
        <p class="notice-content">
        Quisque in sem et sapien volutpat ornare. Aliquam sapien lorem, auctor a arcu interdum, congue 
        rhoncus diam. Suspendisse sit amet malesuada diam. Fusce auctor sit amet tellus et pretium. Nullam 
        pulvinar nisl nisi, eu faucibus lectus mollis id. Pellentesque ligula nisl, ornare in sodales sed, posuere a 
        lectus. Maecenas id mauris volutpat, porttitor ex ac, eleifend ligula. Ut iaculis lacinia purus, quis eleifend 
        ex facilisis non. Aenean vestibulum elit non fringilla pulvinar.
        <br><br>
        Vestibulum tincidunt neque at nisl tempus volutpat. Duis bibendum ex et nunc gravida, non hendrerit 
        est blandit. Pellentesque odio nibh, blandit quis tincidunt dictum, condimentum et ligula. Mauris gravida 
        magna suscipit justo porttitor aliquet. Aenean eu arcu a augue laoreet sagittis et at eros. Mauris tempus 
        nibh quis ante porta suscipit. Sed scelerisque arcu in lacus consectetur rhoncus. Nulla lobortis turpis 
        tortor, sollicitudin interdum felis congue sit amet. Etiam ac mauris quis massa facilisis fermentum eu 
        vitae lorem. Nam enim felis, blandit in imperdiet pellentesque, aliquet eget risus. Cras at hendrerit 
        neque, non blandit lectus. Nulla facilisi. Aliquam vestibulum velit elementum, eleifend neque luctus, 
        luctus nisl.
      </p>
      </div>
      <v-img
        :src="`https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f088f880754593.5ceab6bde3e81.jpg`"
        :lazy-src="`https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f088f880754593.5ceab6bde3e81.jpg`"
        aspect-ratio="1"
        class="grey lighten-2">
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <div class="row mt-4">
        <p class="notice-content">
        Vivamus finibus turpis ut sodales consectetur. Sed finibus magna posuere nunc feugiat, eget mattis odio 
        tincidunt. Fusce fringilla vehicula enim, sit amet congue augue blandit vitae. Proin non justo et sapien 
        convallis consequat. Curabitur pulvinar quis eros sed scelerisque. Maecenas gravida accumsan 
        bibendum. Donec in ligula facilisis, congue dolor sit amet, condimentum sem. Phasellus maximus dui 
        est, in scelerisque augue luctus vel. In vulputate nisi at dapibus bibendum. Nunc vehicula vitae metus a 
        eleifend. Duis viverra metus id rhoncus pharetra. Pellentesque viverra ut ex eu mattis. Maecenas ac diam 
        dictum, lacinia sapien ac, aliquet mi. Quisque pulvinar, ante eu molestie lacinia, turpis enim fringilla ante, 
        sit amet vehicula quam ex non justo. Vestibulum at accumsan dolor. Proin varius semper nunc, in 
        commodo erat tristique ut.
      </p>
      </div>
    </v-layout>
</template>

<script>
export default {
  name: 'ContentComponent'
}
</script>

<style lang="scss" scoped>
.notice-content {
  text-align: justify;
  line-height: 34px;
}
</style>
