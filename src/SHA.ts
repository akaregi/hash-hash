import jsSHA from 'jssha'

export type Variant = "SHA-1" | "SHA-224" | "SHA-256" | "SHA-384" | "SHA-512" | "SHA3-224" | "SHA3-256" | "SHA3-384" | "SHA3-512"

function newSHA(variant: Variant): jsSHA {
    return new jsSHA(variant, 'TEXT', { encoding: 'UTF8' })
}

function getHash(engine: jsSHA, text: string): string {
    engine.update(text)
    return engine.getHash('HEX')
}

export function hash (variant: Variant, text: string) {
    const engine = newSHA(variant)
    return getHash(engine, text)
}