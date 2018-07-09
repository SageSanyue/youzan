<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swp-page swiper-slide" v-for="list in lists">
            <a class="js-no-follow" v-bind:href="list.clickUrl">
              <img class="goods-main-photo fadeIn" :src="list.img">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style>
    .swiper-slide img {
        height: 100%;
        width: 100%;
    }
</style>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'swiper',
        //props: ['lists'],
        props: {
            lists: {
                //type: Array,
                required: true
            },
            name: {

            }
        },
        created() {
           // console.log('created:',document.querySelectorAll('.swiper-slide'))
        },
        mounted() {
            //console.log('mounted:',document.querySelectorAll('.swiper-slide'))
            new Swiper('.swiper-container',{
                loop: true,
                pagination: {el:'.swiper-pagination'}
            })
        },
        /*watch: {
            lists(val,oldVal){
                console.log(val,oldVal)
                console.log('before nextTick:',document.querySelectorAll('.swiper-slide'))
                this.$nextTick(() => {
                    console.log('after nextTick:',document.querySelectorAll('.swiper-slide'))
                })
            }
        }*/
    }
</script>