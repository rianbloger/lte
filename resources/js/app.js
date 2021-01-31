require('./bootstrap');
require('admin-lte');

import "select2";

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
