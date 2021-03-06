export type TtagOpts = {
    extract?: Object;
    defaultLang?: string;
    resolve?: { translations: string };
};

export type Progress = {
    text: string;
    start(text?: string | undefined): any;
    succeed(text?: string | undefined): any;
    warn(text?: string | undefined): any;
    fail(text?: string): any;
};
