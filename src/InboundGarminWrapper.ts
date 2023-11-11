import { Buffer } from 'node:buffer';

import { request } from './request';

type IPCUserCredentials = {
	username: string;
	password: string;
};

type BaseGetOpts = RequestInit;

export class InboundGarminWrapper {
	// IPC Url that is supplied by the Garmin Inbound API.
	readonly IPCUrl: string;

	// User imei that is used as the device id.
	readonly imei: string;

	// Base options for a GET request.
	readonly baseGetOpts: BaseGetOpts;

	constructor(IPCUrl: string, credentials: IPCUserCredentials, imei: string) {
		this.IPCUrl = IPCUrl;
		this.imei = imei;
		this.baseGetOpts = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${this.createInboundBasicAuth(credentials)}`,
			},
		};
	}

	private createInboundBasicAuth(creds: IPCUserCredentials) {
		return Buffer.from(`${creds.username}:${creds.password}`).toString('base64');
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Tracking.svc/GetIntervalGET
	 *
	 * @param options
	 */
	public async getTrackingInterval(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Tracking.svc/Interval?IMEI=${this.imei}`, opts);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Tracking.svc/GetTrackingStatusGET
	 *
	 * @param options
	 */
	public async getTrackingTracking(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Tracking.svc/Tracking?IMEI=${this.imei}`, opts);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Tracking.svc/VersionGET
	 *
	 * @param options
	 */
	public async getTrackingVersion(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Version.svc/Version`, opts);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Location.svc/HistoryGET
	 *
	 * @param start
	 * @param end
	 * @param options
	 */
	public async getLocationHistory(start: string, end: string, options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(
			`https://${this.IPCUrl}/IPCInbound/V1/Location.svc/History?start=${start}&end=${end}&IMEI=${this.imei}`,
			opts
		);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Location.svc/LastKnownLocationGET
	 *
	 * @param options
	 */
	public async getLocationLastKnownLocation(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Location.svc/LastKnownLocation?IMEI=${this.imei}`, opts);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Location.svc/GetLocationRequestsGET
	 *
	 * @param options
	 */
	public async getLocationLocationRequest(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Location.svc/LocationRequest?IMEI=${this.imei}`, opts);
	}

	/**
	 * @see https://explore.garmin.com/IPCInbound/docs/#!/Location.svc/VersionGET
	 *
	 * @param options
	 */
	public async getLocationVersion(options: RequestInit = {}) {
		const opts = Object.assign(this.baseGetOpts, options);
		return await request(`https://${this.IPCUrl}/IPCInbound/V1/Location.svc/Version`, opts);
	}
}
