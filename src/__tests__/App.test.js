import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";

import App from '../App';
import { PublicClientApplication } from "@azure/msal-browser";

describe('Sanitize configuration object', () => {
    beforeAll(() => {
        global.msalConfig = require('../auth/authConfig').msalConfig;
    });

    it('should define the config object', () => {
        expect(msalConfig).toBeDefined();
    });

    it('should contain credentials', () => {
        const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(regexGuid.test(msalConfig.auth.clientId)).toBe(true);
    });

    it('should contain authority uri', () => {
        const regexUri = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        expect(regexUri.test(msalConfig.auth.authority)).toBe(true);
    });

    it('should define a redirect uri', () => {
        expect(msalConfig.auth.redirectUri).toBeDefined();
    });
});

describe('Ensure that the app starts', () => {
    beforeAll(() => {
        global.crypto = require('crypto');
        global.msalConfig = require('../auth/authConfig.js').msalConfig;
        global.msalInstance = new PublicClientApplication(msalConfig);
    
        expect(msalInstance).toBeDefined();
        expect(msalInstance).toBeInstanceOf(PublicClientApplication);
    });

    it('should initialize MSAL', () => {
        expect(msalInstance).toBeDefined();
        expect(msalInstance).toBeInstanceOf(PublicClientApplication);
    });
});