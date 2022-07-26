import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productsList: JSON.parse(localStorage.getItem('my-productsList')) ?? [],
        counter: [],
    },
    mutations: {
        ADD_PRODUCT_TO_LIST(state, payload) {
            state.productsList.push(payload);
            localStorage.setItem('my-productsList', JSON.stringify(state.productsList));
            let successAnimation = 1;
            state.counter.push(successAnimation);
        },
        REMOVE_PRODUCT(state, payload) {
            state.productsList.splice(state.productsList.indexOf(payload), 1)
            localStorage.setItem('my-productsList', JSON.stringify(state.productsList))
        },
        FILTER__PRODUCTS(state, payload) {
            if (payload === "Min") {
                state.productsList.sort((first, second) => {
                    return first.price > second.price ? 1 : -1;
                });
            }
            if (payload === "Max") {
                state.productsList.sort((first, second) => {
                    return first.price > second.price ? -1 : 1;
                });
            }
            if (payload === "Name") {
                return state.productsList.sort((first, second) => first.nameProduct.localeCompare(second.nameProduct))
            }
        },
        SET_PRODUCTS_TO_LIST(state, payload) {
            state.productsList = payload;
            localStorage.setItem('my-productsList', JSON.stringify(state.productsList));
        },
        SET_EXISTED_PRODUCTS_LIST(state, payload) {
            state.productsList = payload;
        },
    },
    actions: {
        fetchProducts({
            commit
        }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([{
                        "nameProduct": "Мяч",
                        "description": "Потрясающий футбольный мяч, с которым можно играть на стадионе, футбольном поле или площадке.Лучший подарок себе и близким.",
                        "link": "https://images.wallpaperscraft.ru/image/single/futbolnyj_miach_futbol_gazon_121273_1280x720.jpg",
                        "price": 5500
                    }, {
                        "nameProduct": "Кружка",
                        "description": "Прикольная кружка для вашей кухни. Также подходит в качестве оригинального подарка.",
                        "link": "https://smcatalog.ru/upload/iblock/300/3000841269df0cbc95b0402939de9e51.jpg",
                        "price": 2000
                    }, {
                        "nameProduct": "Фотоаппарат",
                        "description": "тип камеры: беззеркальная со сменной оптикой, формат матрицы: 4/3 (Four Thirds), число эффективных мегапикселей матрицы: 16",
                        "link": "https://www.yarkiy.ru/system/uploads/preview/photo_storage/95334/gx880silverslant-598249.jpg",
                        "price": 2300
                    }])
                }, 1500)
            }).then(res => {
                commit('SET_PRODUCTS_TO_LIST', res)
            })
        },
    },
    getters: {
        getProductsList: state => state.productsList,
        successAnimation: state => state.counter,
    },
})