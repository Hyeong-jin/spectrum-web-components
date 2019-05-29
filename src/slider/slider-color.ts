/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    html,
    LitElement,
    property,
    CSSResultArray,
    TemplateResult,
    query,
} from 'lit-element';

import sliderColorStyles from './slider-color.css';
import sliderSkinStyles from './slider-skin.css';
import sliderStyles from './slider.css';
import { strictCustomEvent } from '../events';

export type SliderColorEventDetail = number;

export class SliderColor extends LitElement {
    public static is = 'sp-slider-color';

    public static get styles(): CSSResultArray {
        return [sliderStyles, sliderSkinStyles, sliderColorStyles];
    }

    @property()
    public type = '';

    @property({ type: Number })
    public value = 10;

    @property()
    public label = '';

    @property({ type: Number })
    public max = 20;

    @property({ type: Number })
    public min = 0;

    @property({ type: Number })
    public step = 1;

    @property({ type: Boolean, reflect: true })
    public disabled = false;

    @property({ type: Boolean, reflect: true })
    public dragging = false;

    @query('#input')
    private inputElement!: HTMLInputElement;

    public onInput(): void {
        const inputValue = this.inputElement.value;

        this.value = parseFloat(inputValue);

        const inputEvent = strictCustomEvent('sp-slider-color:input', {
            bubbles: true,
            composed: true,
            detail: this.value,
        });

        this.dispatchEvent(inputEvent);
    }

    public onChange(): void {
        const changeEvent = strictCustomEvent('sp-slider-color:change', {
            bubbles: true,
            composed: true,
            detail: this.value,
        });

        this.dispatchEvent(changeEvent);
    }
    protected render(): TemplateResult {
        return html`
            <div id="labelContainer">
                <label id="label" for="input">${this.label}</label>
                <div id="value" role="textbox" aria-readonly="true" aria-labelledby="label">
                    ${this.value}
                </div>
            </div>
            <div id="controls">
                <input type="range"
                      id="input"
                      value="${this.value}"
                      step="${this.step}"
                      min="${this.min}"
                      max="${this.max}"
                      @change="${this.onChange}"
                      @input=${this.onInput}
                      @mousedown=${this.onMouseDown}
                      @mouseup=${this.onMouseUp}
                  />
                <div class="track"></div>
                <div id="handle" style="${this.handleStyle}"></div>
                </div>
            </div>
        `;
    }

    private onMouseDown(): void {
        this.dragging = true;
    }

    private onMouseUp(): void {
        this.dragging = false;
    }

    /**
     * Ratio representing the slider's position on the track
     */
    private get trackProgress(): number {
        return this.value / this.max;
    }

    private get handleStyle(): string {
        return `left: ${this.trackProgress * 100}%`;
    }
}

declare global {
    interface GlobalEventHandlersEventMap {
        'sp-slider-color:input': CustomEvent<SliderColorEventDetail>;
        'sp-slider-color:change': CustomEvent<SliderColorEventDetail>;
    }
}