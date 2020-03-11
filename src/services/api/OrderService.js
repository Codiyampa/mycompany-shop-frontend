import request from './Request';

function create(content) {
    return request({
        url:    '/catalog/orders/',
        method: 'POST',
        data:   content
    });
}

const OrderService = {
    create
};

export default OrderService;