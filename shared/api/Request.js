import fetcher from 'node-fetch';
import { checkResponseStatus } from './ErrorsHandler';

export default class Request {
    constructor({
        url = '/',
        method = 'GET',
        body = {},
        headers = {},
    }) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }

    execute({
        apiUrl,
        body = {},
        headers = {},
        onError = null
    }) {
        return new Promise((resolve, reject) => {
            const url = `${apiUrl}${this.url}`;

            const resultOptions = {
                method: this.method,
                headers: { ...headers, ...this.headers },
            };

            if (this.method !== 'get') {
                resultOptions.body = JSON.stringify({ ...body, ...this.body });
            }

            fetcher(url, resultOptions)
                .then(async (response) => {
                    return response.json();
                })
                .then(json => {

                    if (json.isError && onError) {
                        onError({ type: json.type });
                    }

                    resolve(json)
                })
                .catch(err => {
                    if (!err.json) {
                        if (onError) {
                            onError({ type: 'INTERNAL_SERVER_ERROR' });
                        }
                        return;
                    }

                    err.json()
                        .then(notification => {
                            if (onError) {
                                console.log(`I'am really want call onError callback, but you not pass it to me :( You error is`, notification)
                                onError(notification);
                            }
                            reject(notification)
                        })
                        .catch(err => {
                            console.error(`Api can't parse json object in answer from server`, err)
                        });
                });
        });
    }
}
