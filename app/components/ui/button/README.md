# Button UI Component

### Types: ButtonProps

        active?: boolean;
        busy?: boolean;
        className?: string;
        children?: ReactNode;
        color?: ColorProp;
        component?: ElementType;
        disabled?: boolean;
        endIcon?: ReactNode;
        href?: string;
        fullwidth?: boolean;
        invert?: boolean;
        label?: string;
        onClick?: (e: SyntheticEvent) => void;
        startIcon?: ReactNode;
        target?: TargetProp;
        title?: string;
        size?: Extract<SizeProp, "xs" | "sm" | "md" | "lg" | "xl"> | "inherit";
        style?: CSSProperties;
        variant?: ButtonVariantProp;

#### ReactTypes
    import type {CSSProperties, ElementType, ReactNode, SyntheticEvent} from "react"

#### ComponentTypes
- Component types are built-in and can be adjusted
-

    ColorProp: | Extract<IntentProp>
    | "inherit"
    | "primary"
    | "secondary"
    | "tertiary"
    | "light"
    | "dark";

    IntentProp: "info" | "success" | "warning" | "danger" | "error";

    ButtonVariantProp: "_blank" | "_self" | "_parent" | "_top" | "framename";

    SizeProp: | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "full"

    TargetProp: "_blank" | "_self" | "_parent" | "_top" | "framename";