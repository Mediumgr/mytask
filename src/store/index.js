import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: JSON.parse(localStorage.getItem('my-productsList')) ?? [],
    counter: [],
  },
  mutations: {
    ADD_PRODUCT_TO_LIST(state, payload) {
      payload.price = Number(payload.price);
      state.productsList.push(payload);
      localStorage.setItem(
        'my-productsList',
        JSON.stringify(state.productsList)
      );
      state.counter.push(payload.id);
    },
    REMOVE_PRODUCT(state, payload) {
      state.productsList.splice(state.productsList.indexOf(payload), 1);
      state.productsList.forEach((element, index) => {
        element.id = index;
      });
      localStorage.setItem(
        'my-productsList',
        JSON.stringify(state.productsList)
      );
    },
    FILTER__PRODUCTS(state, payload) {
      if (payload === 'Min') {
        state.productsList.sort((first, second) => {
          return first.price > second.price ? 1 : -1;
        });
      }
      if (payload === 'Max') {
        state.productsList.sort((first, second) => {
          return first.price > second.price ? -1 : 1;
        });
      }
      if (payload === 'Name') {
        return state.productsList.sort((first, second) =>
          first.nameProduct.localeCompare(second.nameProduct)
        );
      }
    },
    SET_PRODUCTS_TO_LIST(state, payload) {
      state.productsList = payload;
      localStorage.setItem(
        'my-productsList',
        JSON.stringify(state.productsList)
      );
    },
    SET_EXISTED_PRODUCTS_LIST(state, payload) {
      state.productsList = payload;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 0,
              nameProduct: 'Мяч',
              description:
                'Потрясающий футбольный мяч, с которым можно играть на стадионе, футбольном поле или площадке.Лучший подарок себе и близким.',
              link: 'https://images.wallpaperscraft.ru/image/single/futbolnyj_miach_futbol_gazon_121273_1280x720.jpg',
              price: 5500,
            },
            {
              id: 1,
              nameProduct: 'Кружка',
              description:
                'Прикольная кружка для вашей кухни. Также подходит в качестве оригинального подарка.',
              link: 'https://smcatalog.ru/upload/iblock/300/3000841269df0cbc95b0402939de9e51.jpg',
              price: 2000,
            },
            {
              id: 2,
              nameProduct: 'Фотоаппарат',
              description:
                'тип камеры: беззеркальная со сменной оптикой, формат матрицы: 4/3 (Four Thirds), число эффективных мегапикселей матрицы: 16',
              link: 'https://www.yarkiy.ru/system/uploads/preview/photo_storage/95334/gx880silverslant-598249.jpg',
              price: 2300,
            },
            {
              id: 3,
              nameProduct: 'Телевизор',
              description:
                'Haier HEC R1 — телевизор с 43-дюймовым экраном, разрешение которого составляет 1920 х 1080 пикселей, и поддержкой Smart TV.',
              link: 'https://img.mvideo.ru/Big/10030696bb.jpg',
              price: 3000,
            },
            {
              id: 4,
              nameProduct: 'Наушники',
              description:
                'Наушники True Wireless Huawei FreeBuds SE T0010 работают в частотном диапазоне от 20 Гц до 20 кГц, подключаются к смартфонам через Bluetooth-соединение',
              link: 'https://www.hdretail.ru/upload/iblock/bb6/bb66c6b50b4dd9369dfacf310df85bc6.jpg',
              price: 3300,
            },
            {
              id: 5,
              nameProduct: 'Вентилятор',
              description:
                'Напольный вентилятор Midea MVFS4003 спасет от жары даже в большом помещении. Модель сделана в лаконичном дизайне, поэтому впишется в любой интерьер.',
              link: 'https://berezkazd.ru/upload/iblock/65a/63f3u32ppdevitsmvre23ps3o6nyynlt/ventilyatory_bytovye.jpg',
              price: 1900,
            },
          ]);
        }, 1500);
      }).then((res) => {
        commit('SET_PRODUCTS_TO_LIST', res);
      });
    },
  },
  getters: {
    getProductsList: (state) => state.productsList,
    successAnimation: (state) => state.counter,
  },
});
