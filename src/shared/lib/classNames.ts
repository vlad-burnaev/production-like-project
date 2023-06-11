type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls, _]) => cls),
        ...additional.filter(Boolean)
    ]
    .join(' ')
}