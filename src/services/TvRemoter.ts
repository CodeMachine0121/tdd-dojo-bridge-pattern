import {Remoter} from "./Remoter";
import {TV} from "../models/TV";

export class TvRemoter extends Remoter {
	private tv: TV;

	constructor(device: TV) {
		super(device);
		this.tv = device;
	}

	public modifyVolume(volume: number) {
		this.tv.volume += volume;
	}
}