var helpdeskServices = angular.module('helpdeskServices', ['ngResource']);

helpdeskServices.factory('Ticket', ['$resource', function ($resource) {
    return $resource('/helpdesk/api/v1/ticket/', {}, {
        query: {
            method: 'GET',
            isArray: false,
            params: {
                format: 'json'
            }
        }
    });
}]);

helpdeskServices.factory('State', ['$resource', function ($resource) {
    return $resource('/helpdesk/api/v1/state', {}, {
        query: {
            method: 'GET',
            isArray: false,
            params: {
                format: 'json'
            }
        }
    });
}]);