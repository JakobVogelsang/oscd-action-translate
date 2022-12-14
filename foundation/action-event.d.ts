export interface Create {
    new: {
        parent: Node;
        element: Node;
        reference?: Node | null;
    };
    derived?: boolean;
    checkValidity?: () => boolean;
}
/** Removes `old.element` from `old.parent` before `old.reference`. */
export interface Delete {
    old: {
        parent: Node;
        element: Node;
        reference?: Node | null;
    };
    derived?: boolean;
    checkValidity?: () => boolean;
}
/** Reparents of `old.element` to `new.parent` before `new.reference`. */
export interface Move {
    old: {
        parent: Element;
        element: Element;
        reference?: Node | null;
    };
    new: {
        parent: Element;
        reference?: Node | null;
    };
    derived?: boolean;
    checkValidity?: () => boolean;
}
/** Replaces `old.element` with `new.element`, keeping element children. */
export interface Replace {
    old: {
        element: Element;
    };
    new: {
        element: Element;
    };
    derived?: boolean;
    checkValidity?: () => boolean;
}
/** Legacy type swapping `element`s `oldAttributes` with `newAttributes` */
export interface OldUpdate {
    element: Element;
    oldAttributes: Record<string, string | null>;
    newAttributes: Record<string, string | null>;
    derived?: boolean;
    checkValidity?: () => boolean;
}
export declare type SimpleAction = OldUpdate | Create | Replace | Delete | Move;
export declare type ComplexAction = {
    actions: SimpleAction[];
    title: string;
    derived?: boolean;
};
/** Represents an intended or committed change to some `Element`. */
export declare type EditorAction = SimpleAction | ComplexAction;
/** Inserts `new.element` to `new.parent` before `new.reference`. */
/** Represents some intended modification of a `Document` being edited. */
export interface EditorActionDetail<T extends EditorAction> {
    action: T;
}
export declare type EditorActionEvent<T extends EditorAction> = CustomEvent<EditorActionDetail<T>>;
export declare function newActionEvent<T extends EditorAction>(action: T, eventInitDict?: CustomEventInit<Partial<EditorActionDetail<T>>>): EditorActionEvent<T>;
