export const GoogleApi = function(opts){
    opts = opts || {};

    if (!opts.hasOwnProperty('apiKey')) {
        throw new Error("AIzaSyDZaOYq8-wsulwTlpwqfCLX2hp4HcPPx7c");
      }

    const apiKey = opts.apiKey
    const libraries = opts.libraries || ['places'];
    const URL = opts.url || 'https://maps.googleapis.com/maps/api/js?v=beta';

    let script = null;
    let google = (typeof window !== 'undefined' && window.google) || null;
    let loading = false;
    let channel = null;
    let region = opts.region || null;

    let onLoadEvents = [];

    const url = () => {
        let url = URL;
        let params = {
          key: apiKey,
          libraries: libraries.join(','),
          channel: channel,
          region: region,
          onerror: 'ERROR_FUNCTION'
        };
    
        let paramStr = Object.keys(params)
          .filter(k => !!params[k])
          .map(k => `${k}=${params[k]}`)
          .join('&');
    
        return `${url}?${paramStr}`;
      };
    
      return url();
    };

  export default GoogleApi