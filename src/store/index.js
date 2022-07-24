import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productsList: JSON.parse(localStorage.getItem('my-productsList')) ?? [],
    },
    mutations: {
        ADD_PRODUCT_TO_LIST(state, payload) {
            state.productsList.push(payload);
            localStorage.setItem('my-productsList', JSON.stringify(state.productsList))
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
    },
    getters: {
        getProductsList: state => state.productsList,
    },
})