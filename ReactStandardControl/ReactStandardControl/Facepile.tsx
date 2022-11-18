import * as React from "react";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Facepile, IFacepilePersona, IFacepileProps, OverflowButtonType } from "office-ui-fabric-react/lib/Facepile";
import { PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { Slider } from "office-ui-fabric-react/lib/Slider";
import { facepilePersonas } from "./FacepileExampleData";
import { setIconOptions } from "office-ui-fabric-react/lib/Styling";


import { Button } from "showcase-lit-vite-storybook/button";
import { Card } from "showcase-lit-vite-storybook/card";
import { Tooltip } from "showcase-lit-vite-storybook/card";
import "showcase-lit-vite-storybook/button";
import "showcase-lit-vite-storybook/card";
import "showcase-lit-vite-storybook/tooltip";
import "./css/button.css";

type CustomEvents<K extends string> = { [key in K]: (event: CustomEvent) => void };

type CustomElement<T, K extends string> = Partial<T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>>;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['button-slot']: CustomElement<Button, 'closeChange' | 'openChange'>;
			['card-slot']: CustomElement<Card, 'closeChange' | 'openChange'>;
			['simple-tooltip']: CustomElement<Tooltip, 'closeChange' | 'openChange'>;
		}
	}
}

export interface IFacepileBasicExampleProps {
	
}

export class FacepileBasicExample extends React.Component<IFacepileBasicExampleProps> {
	
	public render(): JSX.Element {
		

		return (

			<div >
			
					<button-slot class="rounded">
						<div slot="title">Search for City</div>
					</button-slot>
					<card-slot>
						<div slot="title">
							More informations here!
						</div>
						<div slot="details">
							More informations here!
						</div>
						
						<div slot="button">
							
						</div>
					</card-slot>
					<span>Test</span>
					<simple-tooltip>
						Test Tooltip
					</simple-tooltip>
					
				</div>
		);
	}

	
}
