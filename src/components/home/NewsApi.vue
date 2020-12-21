<template>
  <div class="news">
    <section class="container-fluid" id="news">
      <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <h2>Seccion de Noticias</h2>
        <div
          class="col-lg-6 col-xs-12"
          v-for="(article, index) of news"
          :key="index"
        >
          <div class="d-flex justify-content-center align-items-center row">
            <div class="p-3 col-5">
              <img
                v-bind:src="article.urlToImage"
                alt="Imagen noticia"
                class="img-fluid"
              />
            </div>

            <div class="p-2 col-7">
              <div>
                <h2>{{ article.title }}</h2>
                <p class="font-italic">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            <a
              :href="article.url"
              target="_blank"
              class="btn btn-outline-success"
              >Abrir</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsAPI from 'newsapi';
export default {
  name: "NewsApi",
  data() {
    return {
      news: null,
    };
  },
	created() {
    this.noticias();
  },
	 methods: {
    noticias() {
		let urlNews = `https://newsapi.org/v2/top-headlines?country=co&category=technology&apiKey=92f7486d76354de1bc23c324ef2c2acb`;
      axios
        .get(urlNews,{
			headers: {
			"Access-Control-Allow-Origin": "*",
			'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
		}
		})
        .then((response) => {
          console.log(response.data);
          this.news = response.data.articles.slice(0, 4);
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
	},
	
	mynews() {
		const newsapi = new NewsAPI('92f7486d76354de1bc23c324ef2c2acb',  { 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': '*' }} );
newsapi.sources({
  category: 'technology', // optional
  language: 'en', // optional
  country: 'us' // optional
}
).then(response => {
  console.log(response);
	this.news = response.sources.slice(0, 4);
});
	}

  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
