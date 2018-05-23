<template>
    <div class="add">
      <Mheader>添加</Mheader>
        <ul >
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model="book.bookName" id="bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" v-model="book.bookInfo" id="bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
            <label for="bookCover">书的封面</label>
            <input type="text" v-model="book.bookCover" id="bookCover">
          </li>
          <li>
            <button @click="add">添加</button>
          </li>
        </ul>
      </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from '../../base/NavHeader/mheader.vue'
  import {addBook} from '../../api';
    export default {
        data(){
            return {book:{}}
        },
        methods: {
          async add(){
            await addBook(this.book);
            this.$router.push('/list');
          }
        },
        computed: {},
        components: {
          Mheader
        }
    };
</script>
<style lang="less">
 @import "Add.less";
</style>
