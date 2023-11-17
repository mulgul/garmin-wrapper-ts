export type IPCUserCredentials = {
	username: string;
	password: string;
};

export type BaseGetOpts = RequestInit;

export type DevicesKey<T> = {
	Devices: T[];
};

export type HistoryItems<T> = {
	HistoryItems: T[];
};

export type LocationsKey<T> = {
	Locations: T[];
};

export type Coordinate = {
	Latitude: number;
	Longitude: number;
};

export type Interval = {
	IMEI: number;
	Interval: number;
};

export type Tracking = {
	IMEI: number;
	Interval: number;
	LastReport: string;
	Tracking: boolean;
};

export type LastKnownLocation = {
	Altitude: number;
	Coordinate: Coordinate;
	Course: number;
	GPSFixStatus: number;
	IMEI: number;
	Speed: number;
	Timestamp: string;
};

export type History = {
	IMEI: number;
	Timestamp: string;
	Coordinate: Coordinate;
	Altitude: number;
	Speed: number;
	Course: string;
	GPSFixStatus: string;
	TextMessage: string;
	Recipients: string[];
};

export type Version = {
	Service: string;
	URL: string;
	Build: string;
	Version: string;
};

export type LocationRequest = {
	IMEI: number;
	Pending: boolean;
	StartDate: string;
	ExpirationDate: string;
};

export type Respondent = {
	Respondent: string;
}