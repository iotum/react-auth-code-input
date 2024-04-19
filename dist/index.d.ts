import React from 'react';
declare const allowedCharactersValues: readonly ["alpha", "numeric", "alphanumeric"];
export declare type AuthCodeProps = {
    allowedCharacters?: typeof allowedCharactersValues[number];
    ariaLabel?: string;
    autoFocus?: boolean;
    containerClassName?: string;
    disabled?: boolean;
    inputClassName?: string;
    isPassword?: boolean;
    length?: number;
    placeholder?: string;
    onChange: (res: string, completed: boolean) => void;
};
export declare type AuthCodeRef = {
    focus: () => void;
    clear: () => void;
};
declare const AuthCode: React.ForwardRefExoticComponent<AuthCodeProps & React.RefAttributes<AuthCodeRef>>;
export default AuthCode;
