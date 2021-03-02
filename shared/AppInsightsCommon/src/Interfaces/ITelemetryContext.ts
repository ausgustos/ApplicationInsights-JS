// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { IApplication } from './Context/IApplication';
import { IDevice } from './Context/IDevice';
import { IInternal } from './Context/IInternal';
import { ILocation } from './Context/ILocation';
import { IUserContext } from './Context/IUser';
import { ISession } from './Context/ISession';
import { ITelemetryTrace } from './Context/ITelemetryTrace';
import { IOperatingSystem } from './Context/IOperatingSystem';
import { IWeb } from './Context/IWeb';

export interface ITelemetryContext {
    /**
     * The object describing a component tracked by this object.
     */
    application: IApplication;

    /**
     * The object describing a device tracked by this object.
     */
    device: IDevice;

    /**
     * The object describing internal settings.
     */
    internal: IInternal;

    /**
     * The object describing a location tracked by this object.
     */
    location: ILocation;

    /**
     * The object describing a operation tracked by this object.
     */
    telemetryTrace: ITelemetryTrace;

    /**
     * The object describing a user tracked by this object.
     */
    user: IUserContext;

    /**
     * The object describing a session tracked by this object.
     */
    session: ISession;

    /**
     * The object describing os details tracked by this object.
     */
    os?: IOperatingSystem;

    /**
     * The object describing we details tracked by this object.
     */
    web?: IWeb;

    /**
     * application id obtained from breeze responses. Is used if appId is not specified by root config
     */
    appId: () => string;
}