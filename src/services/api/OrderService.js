import request from './Request';

function create(content) {
    return request({
        url:    '/v1/orders/',
        method: 'POST',
        data:   content
    });
}

const OrderService = {
    create
};

export default OrderService;