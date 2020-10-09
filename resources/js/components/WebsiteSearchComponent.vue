<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">

            <div class="form-group">
              <input class="form-control-lg" type="text" name="domain" v-model="domain" id="domain" aria-describedby="domainHelp" placeholder="Enter a Domain Name">
              <small id="domainHelp" class="form-text text-muted">Enter a domain URL to get results based on the database records.</small>
            </div>
            <button class="btn btn-primary" @click="get">Submit</button>
            <br>
            <div class="results">{{data}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/**
* @TODO: Write front-end code here so you can hit the /api/websites/search
* endpoint with a domain name or URL and retrieve a single results.
*
* You can use axios.post in here, just display the result in the .results div.
*/
export default {
  data(){
    return {
      domain : '',
      data : null,
    }
  },
  methods : {
    /**
    *
    * Evaluate the content of the v-model domain and make the axios request
    */
    get(){
      if (this.domain === '') {
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Write domain',
          showConfirmButton: false,
          timer: 1000
        });
      }else {
        axios.post(`/search/domain/`,{domain : this.domain}).then(response => {
          if (Object.keys(response.data).length != 0) {
            this.data = response.data;
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Domain find',
              showConfirmButton: false,
              timer: 1000
            });
          }else {
            Swal.fire({
              position: 'top',
              icon: 'warning',
              title: 'Domain not found ',
              showConfirmButton: false,
              timer: 1000
            });
          }
        }).catch(e => {
          console.error(e);
        });
      }
    },
  },
  mounted() {
  }
}
</script>
