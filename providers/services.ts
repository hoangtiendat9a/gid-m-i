import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Services {

    public static get Ip(): string {
        /**
         * xxx
         */
        var ip = "http://localhost:58803/";
        return ip;
    }

    public static ServerURL(url: string, api: string = 'api/'): string {
        var ip = this.Ip;
        return ip + api + url;
    }

    public static get ContentHeaders(): HttpHeaders {
        let contentHeaders = new HttpHeaders(
            { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        );
        return contentHeaders;
    }

    // parse data from json to object
    public static extractResult(res: Object) {
        let body = JSON.parse(JSON.stringify(res));
        return body || {};
    }

    private static getTokenExpirationDate(): Date {
        var date = new Date(localStorage.getItem('expires'));
        return date;
    };

    public static isTokenExpired() {
        var date = this.getTokenExpirationDate();
        if (date == null) {
            return false;
        }

        // Token expired?
        return !(date.valueOf() > new Date().valueOf());
    };

    public static tokenNotExpired() {
        var token = localStorage.getItem('access_token');
        return token !== null && token !== '' && !this.isTokenExpired();
    }
}
