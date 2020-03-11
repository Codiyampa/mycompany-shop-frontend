import request from './Request';

function get(id) {
    return request({
        url:    `/catalog/products/${id}`,
        method: 'GET'
    });
}

function getAll() {
    return request({
        url:    `/catalog/products`,
        method: 'GET'
    });
}

const ProductService = {
    get, getAll
};

export default ProductService;