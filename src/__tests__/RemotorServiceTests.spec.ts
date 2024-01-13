import {describe, expect, it} from "vitest";
import {Remoter} from "../services/Remoter";
import {TV} from "../models/TV";
import {AirCondition} from "../models/AirCondition";
import {TvRemoter} from "../services/TvRemoter";
import {AirConditionRemoter} from "../services/AirConditionRemoter";

describe('for bridge pattern', () => {

	it('should control the TV', () => {

		let tv = new TV();
		let remoter = new Remoter(tv);

		remoter.toggle();
		expect(tv.isOn).toBeTruthy();
	});

	it('should control the air-condition', () => {

		let airCondition = new AirCondition();
		let remoter = new Remoter(airCondition);
		remoter.toggle();
		expect(airCondition.isOn).toBeTruthy();
	});

	it('should control the volume of tv', () => {

		let tv = new TV();
		let remoter = new TvRemoter(tv);

		remoter.toggle();
		remoter.modifyVolume(10);
		expect(tv.volume).toBe(10);
	});

	it('should control the temperature of air-condition', () => {

		let airCondition = new AirCondition();
		let remoter = new AirConditionRemoter(airCondition);
		remoter.toggle();
		remoter.modifyTemperature(10);

		expect(airCondition.temperature).toBe(10);
	});

})
