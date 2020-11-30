/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const config = {
    spectrum: 'button',
    components: [
        {
            name: 'button-base',
            host: {
                selector: '.spectrum-Button',
            },
            slots: [
                {
                    name: 'icon',
                    selector: '.spectrum-Icon',
                },
            ],
            exclude: [/\.spectrum-ClearButton/],
            excludeSourceSelector: [/^(?!(.*),(.*),(.*),(.*),(.*))/],
        },
        {
            name: 'fieldbutton',
            host: {
                selector: '.spectrum-FieldButton',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.is-invalid',
                    name: 'invalid',
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-FieldButton--quiet',
                    name: 'quiet',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-Icon',
                    name: 'icon',
                },
            ],
            exclude: [
                /\.spectrum-ActionButton/,
                /\.spectrum-Button/,
                /\.spectrum-ClearButton/,
            ],
            excludeSourceSelector: [
                /^([^\s]*),([^\s]*),([^\s]*),([^\s]*),([^\s]*)$/,
            ],
        },
        {
            name: 'button',
            host: {
                selector: '.spectrum-Button',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-Button--quiet',
                },
                {
                    type: 'boolean',
                    selector: ':disabled',
                },
                {
                    type: 'enum',
                    name: 'variant',
                    values: [
                        '.spectrum-Button--cta',
                        '.spectrum-Button--primary',
                        '.spectrum-Button--secondary',
                        {
                            name: 'negative',
                            selector: '.spectrum-Button--warning',
                        },
                        '.spectrum-Button--overBackground',
                        '.spectrum-Button--secondary',
                    ],
                },
            ],
            ids: ['.spectrum-Button-label'],
            slots: [
                {
                    name: 'icon',
                    selector: '.spectrum-Icon',
                },
            ],
            exclude: [
                /\.is-disabled/,
                /\.spectrum-ActionButton/,
                /\.spectrum-ClearButton/,
            ],
            excludeSourceSelector: [/^(.*),(.*),(.*),(.*),(.*)$/],
        },
        {
            name: 'action-button',
            host: {
                selector: '.spectrum-ActionButton',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-ActionButton--quiet',
                },
                {
                    type: 'boolean',
                    selector: ':disabled',
                },
                {
                    type: 'boolean',
                    name: 'selected',
                    selector: '.is-selected',
                },
                {
                    type: 'boolean',
                    name: 'emphasized',
                    selector: '.spectrum-ActionButton--emphasized',
                },
            ],
            ids: [
                '.spectrum-ActionButton-label',
                {
                    name: 'hold-affordance',
                    selector: '.spectrum-ActionButton-hold',
                },
            ],
            slots: [
                {
                    name: 'icon',
                    selector: '.spectrum-Icon',
                },
            ],
            exclude: [
                /\.is-disabled/,
                /\.spectrum-Button/,
                /\.spectrum-ClearButton/,
            ],
            excludeSourceSelector: [/^(.*),(.*),(.*),(.*),(.*)$/],
        },
        {
            name: 'clear-button',
            host: {
                selector: '.spectrum-ClearButton',
            },
            attributes: [
                {
                    selector: '.spectrum-ClearButton--small',
                    type: 'boolean',
                    name: 'small',
                },
                {
                    type: 'enum',
                    name: 'variant',
                    values: [
                        '.spectrum-ClearButton--cta',
                        '.spectrum-ClearButton--primary',
                        '.spectrum-ClearButton--secondary',
                        {
                            name: 'negative',
                            selector: '.spectrum-ClearButton--warning',
                        },
                        '.spectrum-ClearButton--overBackground',
                        '.spectrum-ClearButton--secondary',
                    ],
                },
            ],
            classes: [
                {
                    name: 'icon',
                    selector: '.spectrum-Icon',
                },
            ],
            exclude: [/\.spectrum-ActionButton/, /\.spectrum-Button/],
            excludeSourceSelector: [/^(.*),(.*),(.*),(.*),(.*)$/],
        },
    ],
};

export default config;
