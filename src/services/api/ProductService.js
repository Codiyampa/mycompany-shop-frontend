import request from './Request';

function get(id) {
    return request({
        url:    `/v1/products/${id}`,
        method: 'GET'
    });
}

function getAll() {
    return request({
        url:    `/v1/products`,
        method: 'GET'
    });
}

const ProductService = {
    get, getAll
};

export default ProductService;