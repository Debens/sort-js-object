import { ISortOptions } from '../sort';
import * as vscode from 'vscode';

export const getOptions = (): ISortOptions =>
    buildConfig<ISortOptions>({ interface: true, enum: true });

const buildConfig = <Config>(defaults: Config): Config =>
    Object.entries(defaults).reduce<Config>(
        (config, [key, defaultValue]) => {
            config[key] = getConfigValue(key, defaultValue);

            return config;
        },
        <Config>{},
    );

const getConfigValue = <T>(key: string, noValue: T): T => {
    const value = getRootConfig().get<T>(key);

    return typeof value !== 'undefined' ? value : noValue;
};

const getRootConfig = () => vscode.workspace.getConfiguration('sort-js-object');
